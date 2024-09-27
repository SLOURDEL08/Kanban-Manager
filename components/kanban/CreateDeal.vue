<script lang="ts" setup>

import { v4 as uuid } from 'uuid'
import { defineProps } from 'vue'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants'
import type { IDeal } from '~/types/deals.types.js'
import { useMutation } from '@tanstack/vue-query'
import { AppwriteException } from 'appwrite'
const isOpenForm = ref(false)
import { ID } from 'appwrite'



const props = defineProps({
    status: {
        type: String,
        default: '',
    }, refetch: {
        type: Function,
    }
})

interface IDealFormState {
  status: string;
  name: string;
  price: string; // Changed to string to match UiInput expectations
  customer: {
    email: string;
    name: string;
  };
}

const { handleSubmit, defineField, handleReset } = useForm<IDealFormState>({
  initialValues: {
    status: props.status,
    name: '',
    price: '', // Initialize as empty string
    customer: {
      email: '',
      name: '',
    },
  },
  validationSchema: {
    price: (value: string) => {
      const numberValue = Number(value);
      if (isNaN(numberValue) || !Number.isInteger(numberValue) || numberValue < 0) {
        return 'Le prix doit être un nombre entier positif'
      }
      return true
    },
  },
})

const [name, nameAttrs] = defineField('name')
const [price, priceAttrs] = defineField('price')
const [customerEmail, customerEmailAttrs] = defineField('customer.email')
const [customerName, customerNameAttrs] = defineField('customer.name')

// Computed property to convert price string to number
const priceAsNumber = computed(() => parseInt(price.value) || 0)

const { mutate, isPending, error } = useMutation({
  mutationKey: ['create a new deal'],
  mutationFn: (data: IDealFormState) => {
    const formattedData = {
      ...data,
      price: parseInt(data.price) || 0, // Convert price to number
    }
    return DB.createDocument(DB_ID, COLLECTION_DEALS, ID.unique(), formattedData)
  },
  onSuccess() {
    props.refetch && props.refetch()
    handleReset()
    isOpenForm.value = false // Close the form after successful submission
  },
  onError(error: unknown) {
    console.error('Error creating deal:', error)
    if (error instanceof AppwriteException) {
      console.error('Appwrite error details:', error.response)
    }
  }
})

const onSubmit = handleSubmit((values: IDealFormState) => {
  console.log('Submitting values:', values)
  mutate(values)
})

</script>

<template>
    <div class="text-center mb-2">
        <button
        @click="isOpenForm = !isOpenForm"
         class="transition-all w-full flex justify-center items-center opacity-10  hover:opacity-100 hover:text-foreground">
        <Icon v-if="isOpenForm"
        name="radix-icons:arrow-up"
        class="fade-in-100 fade-out-0"
        size="30" />
         <Icon v-else
        name="radix-icons:plus-circled"
        class="fade-in-100 fade-out-0"
        size="30" />
        </button>
    </div>
    <form v-if="isOpenForm" @submit="onSubmit" class="form">
        <UiInput
        placeholder="Entrer le nom"
        v-model="name"
        v-bind="nameAttrs"
        type="text"
        class="input"
        />
        <UiInput
      placeholder="Le prix"
      v-model="price"
      v-bind="priceAttrs"
      type="text" 
      inputmode="numeric" 
      pattern="[0-9]*"
      class="input"
    />
         <UiInput
        placeholder="Email"
        v-model="customerEmail"
        v-bind="customerEmailAttrs"
        type="email"
        class="input"
        />
         <UiInput
        placeholder="Le prix"
        v-model="customerName"
        v-bind="customerNameAttrs"
        type="text"
        class="input"
        />
        <button class="btn" :disabled="isPending">
            {{ isPending ? 'Loading....' : 'Créer' }}
        </button>
    </form>
</template>

<style scoped>
.input {
    @apply border-[#161c26] mb-2 placeholder:text-[#748092]
    focus:border-border transition-colors;
}

.btn {
    @apply text-xs border py-1 px-2 rounded border-[#161c26]
    hover:border-[#] transition-colors text-[#aebed5]
    hover:text-white;
}

.form{
    @apply mb-3 block;
    animation: show 0.3s ease-in-out;
}

@keyframes show {
    from {
        @apply border-[#];
        transform: translateY(-35px);
        opacity: 0.4;
    }
    90%{
        @apply border-[#]
    }

    to{
        @apply border-transparent;
        transform: translateY(0);
        opacity: 1;
    }
}
</style>