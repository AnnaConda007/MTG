import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from '../../molecules/accordion';
import { mock } from '../mock/mocks';
const meta = {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    mainContent: mock.longText,
  },
};
