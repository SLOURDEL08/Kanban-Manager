<template>
  <div>
    <!-- Overlay flou -->
    <Transition name="fade">
      <div v-if="store.isOpen" class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" @click="store.toggle()"></div>
    </Transition>

    <!-- Slideover -->
    <Transition name="slide">
      <USlideover v-if="store.isOpen" class="fixed inset-y-0 right-0 w-80 shadow-xl z-50 overflow-y-auto">
        <UCard
          class="flex bg-[#0e172a]/95 overflow-hidden flex-col h-full"
          :ui="{
            base: 'h-full',
            body: { base: 'flex-1' },
            ring: '',
            divide: 'divide-y divide-border',
          }"
        >
          <template #header>
            <div class="flex justify-between items-center relative">
              <KanbanSlideoverTop />
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                @click="store.toggle()"
                aria-label="Fermer"
                class="absolute top-2 right-2 hover:text-[#06eec5] hover:bg-transparent transition-all duration-300"
              />
            </div>
          </template>
          
          <KanbanSlideoverComments />
        </UCard>
      </USlideover>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useDealSlideStore } from '~/store/deal-slide.store'

const store = useDealSlideStore()
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>