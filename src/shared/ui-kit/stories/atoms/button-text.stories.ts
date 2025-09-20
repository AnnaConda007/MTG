import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonText } from '../../atoms/button-text';

const meta = {
  title: 'Atoms/Button-text',
  component: ButtonText,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Нажать',
    bgColor: 'bg-red-100',
    handleButton: () => {},
  },
};
export const Outlined: Story = {
  args: {
    value: 'Нажать',
    variant: 'outlined',
    valueColor: 'text-red-200',
    borderColor: 'border-red-200',
    handleButton: () => {},
  },
};
export const Text: Story = {
  args: {
    value: 'Нажать',
    variant: 'text',
    valueColor: 'text-red-200',
    handleButton: () => {},
  },
};
