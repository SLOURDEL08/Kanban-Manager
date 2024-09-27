<script setup lang="ts">
import dayjs from 'dayjs';
import { useDealSlideStore } from '~/store/deal-slide.store';

const store = useDealSlideStore()
</script>

<template>
    <div class="border-border bg-black/20 rounded p-4 px-5 w-full">
        <div class="uppercase bold text-xl mb-4">Hello</div>

        <KanbanSlideoverLabel
        label-text="Name your card"
        >
        <h2>{{ store.card?.name }}</h2>
        </KanbanSlideoverLabel>

         <KanbanSlideoverLabel
        label-text="Enter your price"
        >
        {{ convertCurrency(store.card?.price || 0 )}}
        </KanbanSlideoverLabel>
        
         <KanbanSlideoverLabel
        label-text="Status"
        >
        <UiBadge
        variant="outline"
        >
          {{  store.card?.status }}
        </UiBadge>
        </KanbanSlideoverLabel>
        <KanbanSlideoverLabel label-text="Company name">
            {{ store.card?.companyName }}
        </KanbanSlideoverLabel>
         <KanbanSlideoverLabel label-text="Create Date">
            {{ dayjs(store.card?.$createdAt).format('DD MMMM YYYY') }}
        </KanbanSlideoverLabel>

    </div>
</template>