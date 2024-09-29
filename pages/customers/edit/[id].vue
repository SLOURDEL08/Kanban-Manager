<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query';
import { COLLECTION_CUSTOMERS, DB_ID, STORAGE_ID } from '~/app.constants';
import type { ICustomer } from '~/types/deals.types';
import { v4 as uuid } from 'uuid';
import { useField, useForm } from 'vee-validate';

interface InputFileEvent extends Event {
    target: HTMLInputElement & { files: FileList }
}

interface ICustomerFormState extends Pick<ICustomer, 'avatar_url' | 'email' | 'name' | 'from_source'> { }

useSeoMeta({
    title: 'Edit Customer'
});

const route = useRoute();
const customerId = route.params.id as string;

const { handleSubmit, defineField, setValues, values } = useForm<ICustomerFormState>();

const { data, isSuccess, refetch } = useQuery({
    queryKey: ['get customer', customerId],
    queryFn: () => DB.getDocument(DB_ID, COLLECTION_CUSTOMERS, customerId),
});

const customerName = computed(() => {
    const customerData = data.value as unknown as ICustomerFormState | undefined;
    return customerData?.name || '';
});

const customerData = computed(() => {
    if (!data.value) return undefined;
    const rawData = data.value as Record<string, unknown>;
    return {
        email: rawData.email as string,
        avatar_url: rawData.avatar_url as string,
        from_source: (rawData.from_source as string) || '',
        name: rawData.name as string,
    } as ICustomerFormState;
});

watch(customerData, (newData) => {
    if (isSuccess && newData) {
        setValues(newData);
    }
}, { immediate: true });

const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [fromSource, fromSourceAttrs] = defineField('from_source');
const { value: avatarUrl, setValue: setAvatarUrl } = useField<string>('avatar_url');

const { mutate, isPending } = useMutation({
    mutationKey: ['update customer', customerId],
    mutationFn: (data: ICustomerFormState) => DB.updateDocument(DB_ID, COLLECTION_CUSTOMERS, customerId, data),
    onSuccess() {
        console.log('Customer updated successfully');
        refetch(); // Refetch the customer data after successful update
    },
    onError(error) {
        console.error('Error updating customer:', error);
    }
});

const { mutate: uploadImage, isPending: isUploadImagePending } = useMutation({
    mutationKey: ['upload image'],
    mutationFn: (file: File) => storage.createFile(STORAGE_ID, uuid(), file),
    onSuccess(data) {
        const response = storage.getFileDownload(STORAGE_ID, data.$id);
        setAvatarUrl(response.toString());
        console.log('Image uploaded successfully, URL:', response.toString());
    },
    onError(error) {
        console.error('Error uploading image:', error);
    }
});

const onSubmit = handleSubmit(values => {
    console.log('Submitting form values:', values);
    mutate(values);
});

const handleFileChange = (e: InputFileEvent) => {
    if (e.target.files.length) {
        uploadImage(e.target.files[0]);
    }
};
</script>

<template>
    <div class="p-10">
        <h1 class="font-bold text-2xl mb-10">
            ID VUE : {{ customerName }}
        </h1>

        <form @submit.prevent="onSubmit" class="form">
            <UiInput
                placeholder="Name"
                v-model="name"
                v-bind="nameAttrs"
                type="text"
                class="input"
            />
            <UiInput
                placeholder="Email"
                v-model="email" 
                v-bind="emailAttrs"
                type="text"
                class="input"
            />
            <UiInput
                placeholder="Source"
                v-model="fromSource" 
                v-bind="fromSourceAttrs"
                type="text"
                class="input"
            />
            <NuxtImg
                v-if="avatarUrl || isUploadImagePending"
                :src="avatarUrl"
                alt=""
                width="50"
                height="50"
                class="rounded-full my-2"
            />
            <div> 
                <label>
                    <div>
                        <UiInput
                            type="file"
                            @change="handleFileChange"
                            :disabled="isUploadImagePending"
                        />
                    </div>
                </label>
            </div>
            <Button :disabled="isPending" variant="secondary" class="mt-3">
                {{ isPending ? 'Updating...' : 'Update' }}
            </Button>
        </form>
    </div>
</template>

<style scoped>
.input {
    @apply border mb-2 placeholder:text-gray-400 focus:border-blue-500 transition-colors;
}
</style>