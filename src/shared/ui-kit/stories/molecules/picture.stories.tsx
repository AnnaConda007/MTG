import type { Meta, StoryObj } from '@storybook/react-vite';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Picture } from '../../molecules/picture';
import cardPicture from '../mock/assets/card.jpg';

const meta = {
  title: 'Molecules/Picture',
  component: Picture,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Picture>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: cardPicture.src,
    alt: 'alt',
    size: 'md',
    innerIcons: [
      {
        Icon: AccountBalanceIcon,
        handleIcon: () => {},
        iconColor: 'text-primary',
        iconColorHover: 'text-primary-hover',
      },
    ],
  },
};
