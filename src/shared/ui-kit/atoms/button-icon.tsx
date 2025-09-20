import clsx from 'clsx';

interface Props {
  Icon: React.ElementType;
  iconColor?: string;
  iconColorHover?: string;
  handleButton?: () => void;
  backdrop?: boolean;
  alt?: string;
}

export const ButtonIconUi = ({
  Icon,
  handleButton,
  iconColor,
  iconColorHover,
  backdrop,
}: Props) => {
  return (
    <button
      type="button"
      className={clsx(
        `text-sm ${backdrop && ' bg-dark rounded-full cursor-pointer p-0.5'}`,
        'active:scale-90 transition-transform duration-100 ',
        `hover:scale-110 hover:${iconColorHover}`,
        iconColor,
      )}
      onClick={handleButton}
    >
      <Icon />
    </button>
  );
};
