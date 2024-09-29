<template>
  <div class="w-full overflow-auto">
    <table
      :class="[
        tableVariants({ variant }),
        $props.class,
        'w-full caption-bottom text-sm'
      ]"
      v-bind="$attrs"
    >
      <slot></slot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { tableVariants } from './index';

defineProps<{
  class?: string;
  variant?: 'default' | 'bordered';
}>();
</script>

<style scoped>

</style>