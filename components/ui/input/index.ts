import { type VariantProps, cva } from 'class-variance-authority';

export { default as Input } from './Input.vue';


export const inputVariants = cva(
  'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input text-primary-foreground',
        outline: 'border border-input text-primary-foreground',
        disabled: 'bg-muted text-muted-foreground cursor-not-allowed',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-8 px-2 text-xs',
        lg: 'h-12 px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export type InputVariants = VariantProps<typeof inputVariants>;
