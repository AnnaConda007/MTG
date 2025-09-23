import type { Meta, StoryObj } from '@storybook/react-vite';
 import { Menu } from '../../organisms/menu';
import { RouteNav } from '../../organisms/menu';
 import { Text } from '../../atoms/text';

const routes: RouteNav[] = [
  { path: "/tests", label: "Сеты" },
 { path: "/game", label: "Турниры" }, 
 { path: "/my-card", label: "Мои карты"}] ;

const logo =    <Text text="Mtg-swap" bold={true} color="text-primary"/>

const meta = {
  title: 'Organisms/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    logoItem:    logo,
    items:routes

  }
 
};
