import type { Meta, StoryObj } from '@storybook/react-vite';

const colorVars = [
  '--color-neutral',
  '--color-neutral-dark',
  '--color-neutral-light',
  '--color-neutral-hover',
  '--color-neutral-active',
  '--color-dark',
  '--color-dark-hover',
  '--color-dark-active',
  '--color-primary',
  '--color-primary-hover',
  '--color-primary-active',
  '--color-secondary',
  '--color-secondary-hover',
  '--color-secondary-active',
  '--color-accent',
  '--color-accent-hover',
  '--color-accent-active',
  '--color-success',
  '--color-success-hover',
  '--color-success-active',
  '--color-warning',
  '--color-warning-hover',
  '--color-warning-active',
  '--color-error',
  '--color-error-hover',
  '--color-error-active',
];

const meta: Meta = {
  title: 'Design System/Colors',
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-30">
      {colorVars.map((c) => (
        <div key={c} className="flex flex-col items-center w-28">
          <div className={`w-30 h-30  ${c}`} style={{ backgroundColor: `var(${c})` }} />

          <span className="text-xs mt-1">{c.replace('--color-', '')}</span>
        </div>
      ))}
    </div>
  ),
};
