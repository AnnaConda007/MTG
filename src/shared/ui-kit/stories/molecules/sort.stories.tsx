import type { Meta, StoryObj } from '@storybook/react-vite'; 
import { Sort } from '../../molecules/sort';

const meta = {
  title: 'Molecules/Sort',
  component: Sort,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   options: [{label:"По убыванию", value:""}, {label:"По уменшению", value:""}],
   onChange:(value:string)=>{}
  },
};
