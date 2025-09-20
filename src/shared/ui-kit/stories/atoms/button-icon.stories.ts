import type { Meta, StoryObj } from '@storybook/react-vite';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { ButtonIconUi } from '../../atoms/button-icon';

const meta = {
  title: 'Atoms/Button-icon',
  component: ButtonIconUi,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonIconUi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Icon: AccountBalanceIcon,
    handleButton: () => {},
    iconColor: 'text-primary',
    iconColorHover: 'text-primary-hover',
  },
};

export const Backdrop: Story = {
  args: {
    Icon: AccountBalanceIcon,
    handleButton: () => {},
    iconColor: 'text-primary',
    iconColorHover: 'text-primary-hover',
    backdrop: true,
  },
};
