import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState, useRef, useEffect, type ReactNode } from 'react';
import clsx from 'clsx';
import { ButtonIconUi } from '../atoms/button-icon';
import { Text } from '../atoms/text';

interface Props {
  title: string;
  mainContent: ReactNode;
}

export const Accordion = ({ title, mainContent }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const Icon = isOpen ? ExpandLessIcon : KeyboardArrowDownIcon;
  const toggleAccordion = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, mainContent]);

  return (
    <div
      className={clsx(
        'w-full rounded-main flex justify-between items-start p-2 shadow-sm transition-all duration-300 bg-neutral',
        'hover:shadow-md',
      )}
    >
      <div className="flex flex-col flex-1">
        <Text text={title} />
        <div
          style={{ maxHeight: height }}
          className="overflow-hidden transition-all duration-500 ease-in-out"
          ref={contentRef}
        >
          <div className="break-words">{mainContent}</div>
        </div>
      </div>
      <ButtonIconUi Icon={Icon} handleButton={toggleAccordion} iconColor="text-primary" />
    </div>
  );
};
