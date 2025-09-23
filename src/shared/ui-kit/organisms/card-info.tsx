import { ImageUI } from '../molecules/image';
import { Text } from '../atoms/text';
import { SizeImage } from '../molecules/image';

interface Props {
  sizeImage? :SizeImage
  src?: string;
  name?: string;
  type?: string;
  description?: string;
  quote?: string;
  quoteAuthor?: string;
}

export const CardInfo = ({ src, name, type, description, quote, quoteAuthor , sizeImage="lg"}: Props) => {
  return (
    <div className="flex  gap-10  md:flex-nowrap ">
      <ImageUI src={src || ''} size={sizeImage} alt={name || ''} />
      <div className="  flex flex-col gap-5  min-w-60   ">
        <div className="flex flex-col gap-2">
          {name && <Text text={name} bold={true} />}
          {type && <Text text={type} />}
        </div>

        <div className="flex flex-col gap-5">
          {description && <Text text={description} />}

          {quote && (
            <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700">
              <Text text={quote} />
              <div className="flex  justify-end pr-5">
                <cite className="block mt-2 not-italic font-semibold text-gray-500">
                  {quoteAuthor && <Text text={`- ${quoteAuthor}`} />}
                </cite>
              </div>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};
