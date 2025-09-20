import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { EffectCards } from 'swiper/modules';

interface Props {
  elementsList: React.ReactNode[];
  slidesPerView: number;
}

export const SwiperImg = ({ elementsList, slidesPerView }: Props) => {
  return (
    <>
      <Swiper
        effect={slidesPerView === 1 ? 'cards' : ''}
        modules={[Navigation, Mousewheel, Scrollbar, EffectCards]}
        grabCursor={true}
        slidesPerView={slidesPerView}
        navigation
        scrollbar={{
          hide: true,
        }}
        mousewheel
        className="[&_.swiper-scrollbar]:-mb-1.5 
        [&_.swiper-scrollbar-drag]:!neutral 
         [&_.swiper-button-prev]:!text-primary 
         [&_.swiper-button-next]:!text-primary 
          [&_.swiper-button-prev]:!w-6
    [&_.swiper-button-prev]:!h-6
    [&_.swiper-button-next]:!w-6
    [&_.swiper-button-next]:!h-6 
    [&_.swiper-slide-shadow]:hidden "
      >
        {elementsList.map((el, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center">{el}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
