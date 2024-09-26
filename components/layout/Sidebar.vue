<script lang="ts" setup>
import { buttonVariants } from '../ui/button';



</script>

<template>
  <aside class="px-5 py-10 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10  block">
      <NuxtImg src="/logo.svg" alt="" width="100px" class="mx-auto rounded-2xl"/>
    </NuxtLink>
<button
class="absolute top-3 text-white right-3 transition-colors hover:text-primary">
<Icon name="line-md:logout" size="20"/>
</button>
  <LayoutMenu/>
  </aside>
</template>