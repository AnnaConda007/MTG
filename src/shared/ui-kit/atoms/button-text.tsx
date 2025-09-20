import clsx from 'clsx';
import { Text } from './text';

type Variants = 'filled' | 'outlined' | 'text';

interface Props {
  variant?: Variants;
  value: string;
  valueColor?: string;
  bgColor?: string;
  borderColor?: string;
  handleButton: () => void;
  isBold: boolean;
}

export const ButtonText = ({
  variant = 'filled',
  value,
  bgColor = 'bg-primary',
  valueColor = 'text-dark',
  borderColor = 'border-primary',
  handleButton,
  isBold,
}: Props) => {
  const base = 'rounded-main p-1  group active:scale-95 transition-colors duration-200';

  const variants: Record<Variants, string> = {
    filled: clsx(bgColor, 'text-white', 'hover:opacity-90 min-w-36 '),
    outlined: clsx('border-2', borderColor, valueColor, 'hover:opacity-80 min-w-36 '),
    text: clsx(valueColor, 'hover:opacity-80 '),
  };

  const textColor = variant === 'filled' ? 'text-white' : valueColor;

  return (
    <button onClick={handleButton} className={clsx(base, variants[variant])}>
      <div className="inline-block transition-transform duration-200 group-hover:scale-110">
        <Text text={value} color={textColor} bold={isBold} />
      </div>
    </button>
  );
};
