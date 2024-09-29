<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_CUSTOMERS, DB_ID } from '~/app.constants'
import type { ICustomer } from '~/types/deals.types'

useSeoMeta({
    title: 'Customers | Kanban manager'
})

const { data, isLoading } = useQuery({
    queryKey: ['customers'],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_CUSTOMERS),
})

const customers = computed<ICustomer[]>(() => {
    if (!data.value?.documents) return []
    return data.value.documents.map(doc => doc as unknown as ICustomer)
})
</script>

<template>
    <div class="p-10">
        <h1 class="font-bold text-2xl mb-10">Customers</h1>
        <div v-if="isLoading" class="text-center py-4">Loading...</div>
        <UiTable v-else>
            <UiTableHeader>
                <UiTableRow class="text-sm opacity-60 font-normal grid grid-cols-4 mb-4 border-b pb-4">
                    <UiTableHead class="w-[80px]">Avatar</UiTableHead>
                    <UiTableHead class="w-[200px]">Nom</UiTableHead>
                    <UiTableHead class="w-[200px]">Email</UiTableHead>
                    <UiTableHead>Source</UiTableHead>
                </UiTableRow>
            </UiTableHeader>
            
            <UiTableBody>
                <UiTableRow
                    v-for="customer in customers"
                    :key="customer.$id"
                    class="grid grid-cols-4 items-center justify-center mb-4 border-b pb-4"
                >
                    <UiTableCell>
                        <NuxtLink :to="`/customers/edit/${customer.$id}`">
                            <NuxtImg
                                :src="customer.avatar_url"
                                :alt="customer.name"
                                width="50"
                                height="50"
                                class="rounded-full"
                            />
                        </NuxtLink>
                    </UiTableCell>
                    <UiTableCell class="font-medium">
                        {{ customer.name }}
                    </UiTableCell>
                    <UiTableCell>
                        {{ customer.email }}
                    </UiTableCell>
                    <UiTableCell>
                        {{ customer.from_source }}
                    </UiTableCell>
                </UiTableRow>
            </UiTableBody>
        </UiTable>
    </div>
</template>