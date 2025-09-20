import { useState } from 'react';
import { ButtonText } from '../atoms/button-text';

interface Texts {
  title: string;
  mainContent: string | React.ReactNode;
}
interface Props {
  content: Texts[];
}

export const Tabs = ({ content }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTitle = (i: number) => {
    setActiveIndex(i);
  };
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex gap-2 justify-start">
        {content.map((content, i) => (
          <div className={`${activeIndex == i ? 'border-primary border-b-2 ' : ''}`}>
            <ButtonText
              variant="text"
              valueColor="text-dark"
              value={content.title}
              handleButton={() => handleTitle(i)}
              isBold={true}
            />
          </div>
        ))}
      </div>

      {content.map((content, i) => (
        <div className={`${activeIndex == i ? 'visible' : 'hidden'}`}>{content.mainContent}</div>
      ))}
    </div>
  );
};
