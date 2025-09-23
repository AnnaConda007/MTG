"use client";
import { Search } from '@mui/icons-material';
import { Input } from '../molecules/input';
import {  useEffect, useRef, useState, type ReactNode } from 'react';
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
 const [isCollapse, setIsCollapse] =useState(false)
    const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
         setIsCollapse(true);
      }};
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  
    return ( 
        <div ref={wrapperRef} className='relative search'>
        <Input value = {value}   placeholder="Поиск карты"     onChange={(e) => {OnChangeSearch(e.target.value)
          setIsCollapse(false)
        }}  
         Icon={Search} />
 {!isCollapse &&
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
</Swiper> }



         </div>
    )
}



