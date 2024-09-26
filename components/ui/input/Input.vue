<template>
  <input
    :class="[
      inputVariants({ variant, size }),
      $props.class,
      'transition-all duration-300 focus:outline-none focus:ring-0 ring-0 border border-gray-600 hover:border-gray-400'
    ]"
    :value="$props.modelValue"
    @input="handleInput"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { inputVariants } from './index';

defineProps<{
  modelValue?: string;
  class?: string;
  variant?: 'default' | 'outline' | 'disabled';
  size?: 'default' | 'sm' | 'lg';
}>();

const emit = defineEmits(['update:modelValue']);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
input::placeholder {
  color: rgba(255, 255, 255, 0.4); /* Couleur initiale */
  transition: color 0.3s ease; /* Transition */
}

input:hover::placeholder {
  color: white; /* Couleur sur hover */
}
</style>
