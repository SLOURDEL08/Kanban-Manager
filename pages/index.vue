<script setup lang="ts">

import { useKanbanQuery } from '@/components/kanban/useKanbanQuery'
import type { ICard, IColumn } from '~/components/kanban/kanban.types';

useSeoMeta({
    title: 'Home | Kanban Manager'
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)
useKanbanQuery()


</script>


<template>
    <div class="p-10">
        <h1 class="font-bold text-2xl mb-10">Kanban Manager</h1>
        <div>
            <UiCard class="mb-3" draggable="true">
                <UiCardHeader role="button">name card</UiCardHeader>
                <UiCardContent>UiCardContent</UiCardContent>
                <UiCardFooter>Date</UiCardFooter>
            </UiCard>
        </div>
    </div>
</template>

