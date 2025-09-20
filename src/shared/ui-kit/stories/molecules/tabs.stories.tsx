import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from '../../molecules/tabs';
import { mock } from '../mock/mocks';
import { Text } from '../../atoms/text';

const meta = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Tabs>;

const data = [
  {
    title: 'Заголовок 1',
    mainContent: <Text text={mock.longText} />,
  },
  {
    title: 'Заголовок 2',
    mainContent: (
      <div className="bg-amber-500 w-full">
        {' '}
        <span>{mock.longText}</span>
      </div>
    ),
  },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: data,
  },
};
