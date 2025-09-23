import type { Meta, StoryObj } from '@storybook/react-vite';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { ImageUI } from '../../molecules/image';
import cardImg from '../mock/assets/card.jpg';

const meta = {
  title: 'Molecules/Image',
  component: ImageUI,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ImageUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: cardImg.src,
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
