<template>
  <div class="wrapper">
    <NuxtImg src="/loader.svg" alt="Loading..." width="100px" />
  </div>
</template>

<style scoped>
.wrapper {
  @apply bg-sidebar flex items-center justify-center absolute z-50 w-screen h-screen;
}
</style>
