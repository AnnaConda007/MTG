import clsx from 'clsx';

interface Props {
  text: string;
  bold?: boolean;
  color?: string;
  fontSize?:string
}

export const Text = ({ text, bold, color, fontSize }: Props) => {
  return (
    <span className={clsx(`break-words tracking-tight  ${fontSize} ${color} `, bold && 'font-bold')}>
      {text}
    </span>
  );
};
