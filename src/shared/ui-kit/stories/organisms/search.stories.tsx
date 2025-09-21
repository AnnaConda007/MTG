import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchInput } from '../../organisms/search';

const item =  <div className=" w-full"> 
<span>результат</span>
</div>

const results = [item, item,item,item,item,item,item,item,item,item,item,item,item,item];


const meta = {
  title: 'Organisms/Search',
  component: SearchInput,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
 args: {
    searchResults: results,  
  }, 
};
