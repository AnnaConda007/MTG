import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../../molecules/input';
 import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const meta = {
  title: 'Molecules/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  value:"",
   onHandleInput:()=>{},
   placeholder:"placeholder",
   onChange:()=>{},
   Icon:AccountBalanceIcon
  },
};
export const WithBorder: Story = {
  args: {
  value:"",
   onHandleInput:()=>{},
   placeholder:"placeholder",
   onChange:()=>{},
   Icon:AccountBalanceIcon,
   isBorder:true
  },
};
