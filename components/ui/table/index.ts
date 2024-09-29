import { type VariantProps, cva } from 'class-variance-authority';
import Table from './Table.vue';

export { Table };

export const tableVariants = cva(
  'w-full caption-bottom text-sm',
  {
    variants: {
      variant: {
        default: 'border-collapse',
        bordered: 'border-collapse border border-slate-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type TableVariants = VariantProps<typeof tableVariants>;

export const TableHeader = 'thead';
export const TableBody = 'tbody';
export const TableFooter = 'tfoot';
export const TableHead = 'th';
export const TableRow = 'tr';
export const TableCell = 'td';
export const TableCaption = 'caption';