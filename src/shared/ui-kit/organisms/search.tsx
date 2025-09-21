"use client";
import { Search } from '@mui/icons-material';
import { Input } from '../molecules/input';
import {  type ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
 import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

interface Props {
    searchResults:ReactNode[];
    OnChangeSearch:(value:string)=> void;
    value:string
}

export const SearchInput = ({searchResults, OnChangeSearch,value}:Props)=>{
  
  
    return ( 
        <div className='relative'>
        <Input value = {value}   placeholder="Поиск карты"     onChange={(e) => OnChangeSearch(e.target.value)} 
 isBorder={true}
         Icon={Search} />
 
 <Swiper
  direction="vertical"
  slidesPerView="auto"
  freeMode={true}
  scrollbar={{ draggable: true }}
  mousewheel={true}
  modules={[FreeMode, Scrollbar, Mousewheel]}
  className="absolute w-full max-h-56"
>
  {searchResults.map((result, i) => (
    <SwiperSlide key={i} className="!h-auto">
      {result}
    </SwiperSlide>
  ))}
</Swiper>


         </div>
    )
}



