"use client";

import { SwiperCard } from "@/shared/ui-kit/molecules/swiper"
import { ImageUI } from "@/shared/ui-kit/molecules/image";
import cardImg from '../shared/ui-kit/stories/mock/assets/card.jpg';
import { useEffect, useState } from "react"; 
import { Section } from "@/shared/ui-kit/layout/section";
import { routesMap } from "@/shared/ui-kit/config/routes";

export const CardSwiperWidget = ()=>{
const img = <ImageUI src={cardImg.src} alt="" size="lg" />;
const elementsList = [img, img, img, img, img, img];
const [slides, setSlides] = useState(4)  

  useEffect(() => {
   const resize= ()=>  {
   const isLg = matchMedia("(min-width:1024px)").matches
const slidesAmount = isLg ? 4 :1 
 
setSlides(slidesAmount)}
    window.addEventListener("resize", resize);
   }, []);



    return (
<Section title={routesMap.mtgCards.label} linkUrl={routesMap.mtgCards.path} >
 <SwiperCard elementsList={elementsList}  slidesPerView={slides} />
</Section>

   
    )
}