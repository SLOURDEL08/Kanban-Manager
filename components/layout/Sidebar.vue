<script lang="ts" setup>
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store';

const store = useAuthStore()
const isLoadingStore = useIsLoadingStore()
const router = useRouter()

const logout = async () => {
  isLoadingStore.set(true)
  await account.deleteSession('current')
  store.clear()
  await router.push('/login')
  isLoadingStore.set(false)
}

</script>

<template>
  <aside class="px-5 py-10 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10  block">
      <NuxtImg src="/logo.svg" alt="" width="100px" class="mx-auto rounded-2xl"/>
    </NuxtLink>
<button
@click="logout"
class="absolute top-3 text-white right-3 transition-colors hover:text-primary">
<Icon name="line-md:logout" size="20"/>
</button>
  <LayoutMenu/>
  </aside>
</template>