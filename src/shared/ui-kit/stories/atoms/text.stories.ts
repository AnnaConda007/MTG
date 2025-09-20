import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '../../atoms/text';
import { mock } from '../mock/mocks';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: mock.text,
  },
};

export const Bold: Story = {
  args: {
    text: mock.text,
    bold: true,
  },
};
