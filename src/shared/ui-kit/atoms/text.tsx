import clsx from 'clsx';

interface Props {
  text: string;
  bold?: boolean;
  color?: string;
}
export const Text = ({ text, bold, color }: Props) => {
  return (
    <span className={clsx(`break-words tracking-tight ${color} `, bold && 'font-bold')}>
      {text}
    </span>
  );
};
