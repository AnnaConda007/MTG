import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardInfo } from '../../organisms/card-info';
import cardImg from '../mock/assets/card.jpg';

const meta = {
  title: 'Organisms/Card',
  component: CardInfo,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CardInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: cardImg,
    name: 'Командная башня',
    type: 'Земля',
    description: 'Добавьте одну ману любого цвета в цветовую принадлежность вашего командира.',
    quote:
      'Служители — это семь Хаоса. Сила, обогащённая Хаосом, — это сила сердца. Контролёр — тот, кто объединяет Хаос». — Молитва Тикаля',
    quoteAuthor: 'Сильвен Саррай',
  },
};
