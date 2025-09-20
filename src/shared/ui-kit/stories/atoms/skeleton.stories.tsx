import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from '../../atoms/skeleton';

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-72 h-10">
      <Skeleton />
    </div>
  ),
};
