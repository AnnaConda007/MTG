import { useState } from 'react';
import { ButtonIconUi } from '../atoms/button-icon';
import { Skeleton } from '../atoms/skeleton';
type Size = 'sm' | 'md' | 'lg';
type Loading = 'lazy' | 'eager';
type InnerIcons = {
  Icon: React.ElementType;
  handleIcon: () => void;
  iconColor: string;
  iconColorHover?: string;
};

interface Props {
  src: string;
  alt: string;
  loading?: Loading;
  size: Size;
  innerIcons?: [InnerIcons];
}

const sizeMap: Record<Size, string> = {
  sm: 'w-22 h-31',
  md: 'w-36 h-50',
  lg: 'min-w-48 min-h-68',
};

export const Image = ({ src, alt, loading = 'lazy', size, innerIcons }: Props) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${sizeMap[size]} relative`}>
      {!loaded && !error && <Skeleton />}
      {error && <div className="absolute inset-0 flex items-center  justify-center">error</div>}

      <div className="h-fit w-full absolute flex justify-end gap-2 p-1">
        {innerIcons &&
          innerIcons.map((icon) => (
            <ButtonIconUi
              Icon={icon.Icon}
              handleButton={icon.handleIcon}
              iconColor={icon.iconColor}
              iconColorHover={icon.iconColorHover}
              backdrop={true}
            />
          ))}
      </div>
      <img
        decoding="async"
        src={src}
        loading={loading}
        alt={alt}
        className={` rounded-main transition-opacity duration-500 w-full h-full object-contain
          ${loaded && !error ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};
