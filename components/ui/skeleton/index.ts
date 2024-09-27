import { type VariantProps, cva } from "class-variance-authority"

export { default as Skeleton } from "./Skeleton.vue"

export const skeletonVariants = cva("bg-muted animate-pulse rounded-md", {
  variants: {
    variant: {
      default: "bg-muted",
      card: "bg-card",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export type SkeletonVariants = VariantProps<typeof skeletonVariants>