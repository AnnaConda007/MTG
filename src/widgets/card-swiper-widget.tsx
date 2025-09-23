"use client";

import { SwiperCard } from "@/shared/ui-kit/molecules/swiper"
import { Picture } from "@/shared/ui-kit/molecules/picture";
import cardPicture from '../shared/ui-kit/stories/mock/assets/card.jpg';
import { useEffect, useState } from "react"; 
import { Section } from "@/shared/layout/section";
import { routesMap } from "@/shared/config/routes";
 import { PrevueBlock } from "@/shared/layout/prevue-block"

export const CardSwiperWidget = ()=>{
const img = <Picture src={cardPicture.src} alt="" size="lg" />;
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
        <Section >
<PrevueBlock title={routesMap.mtgCards.label} linkUrl={routesMap.mtgCards.path} >
 <SwiperCard elementsList={elementsList}  slidesPerView={slides} />
</PrevueBlock>
        </Section>


   
    )
}