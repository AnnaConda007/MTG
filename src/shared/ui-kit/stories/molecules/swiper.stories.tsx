import type { Meta, StoryObj } from '@storybook/react-vite';
 import { SwiperCard } from '../../molecules/swiper';
import { Picture } from '../../molecules/picture';
import cardPicture from '../mock/assets/card.jpg';

const img = <Picture src={cardPicture.src} alt="" size="md" />;

const elementsList = [img, img, img, img, img, img];
const meta = {
  title: 'Molecules/Swiper',
  component: SwiperCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SwiperCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    elementsList: elementsList,
    slidesPerView: 4,
  },
  render: (args) => <SwiperCard {...args} />,
};

export const OneSlide: Story = {
  args: {
    elementsList: elementsList,
    slidesPerView: 1,
  },
  render: (args) => <SwiperCard {...args} />,
};
