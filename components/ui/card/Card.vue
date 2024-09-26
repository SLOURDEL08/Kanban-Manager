<template>
  <slot />
</template>

<script  lang="ts">
import { cn } from '@/utils/utils'

const Card = defineComponent({
  name: 'Card',
  props: {
    class: { type: String, default: '' }
  },
  setup(props, { slots }) {
    return () => h('div', {
      class: cn('rounded-lg border bg-card text-card-foreground animation border-transparent transition-colors hover:border-[#06eec53d]', props.class)
    }, slots.default?.())
  }
})

const CardHeader = defineComponent({
  name: 'CardHeader',
  props: {
    class: { type: String, default: '' }
  },
  setup(props, { slots }) {
    return () => h('div', {
      class: cn('flex flex-col space-y-1.5 p-6', props.class)
    }, slots.default?.())
  }
})

const CardTitle = defineComponent({
  name: 'CardTitle',
  props: {
    class: { type: String, default: '' }
  },
  setup(props, { slots }) {
    return () => h('h3', {
      class: cn('text-2xl font-semibold leading-none tracking-tight', props.class)
    }, slots.default?.())
  }
})

const CardDescription = defineComponent({
  name: 'CardDescription',
  props: {
    class: { type: String, default: '' }
  },
  setup(props, { slots }) {
    return () => h('p', {
      class: cn('text-sm text-muted-foreground', props.class)
    }, slots.default?.())
  }
})

const CardContent = defineComponent({
  name: 'CardContent',
  props: {
    class: { type: String, default: '' }
  },
  setup(props, { slots }) {
    return () => h('div', {
      class: cn('p-6 pt-0', props.class)
    }, slots.default?.())
  }
})

const CardFooter = defineComponent({
  name: 'CardFooter',
  props: {
    class: { type: String, default: '' }
  },
  setup(props, { slots }) {
    return () => h('div', {
      class: cn('flex items-center p-6 pt-0', props.class)
    }, slots.default?.())
  }
})

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
}
</script>

<style scoped>
@keyframes show {
    from {
        @apply border-[#06eec53d];
        transform: scale(0.5) translateY(-30px);
        opacity: 0.4;
    }

    90%{
        @apply border-[#06eec53d]
    }

    to{
        @apply border-transparent;
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}

.animation{
    animation: show 0.3s ease-in-out
}
</style>