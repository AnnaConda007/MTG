"use client";
import { useCardList } from "@/features/set-list/model/use-card-list";
import { SwiperCard } from "@/shared/ui-kit/molecules/swiper"
import { Picture } from "@/shared/ui-kit/molecules/picture";
import cardPicture from '../shared/ui-kit/stories/mock/assets/card.jpg';
import { JSX, useEffect, useState } from "react"; 
import { Section } from "@/shared/layout/section";
import { routesMap } from "@/shared/config/routes";
 import { PrevueBlock } from "@/shared/layout/prevue-block"

export const CardSwiperWidget = ()=>{
  const [slides, setSlides] = useState(4)  
const  { setList, getCardList } = useCardList()
const [elementsList, setElementsList] = useState<JSX.Element[]>([]);
 const [page, setPage] = useState(1);

  useEffect(() => {
   const resize= ()=>  {
   const isLg = matchMedia("(min-width:1024px)").matches
const slidesAmount = isLg ? 4 :1 
 
setSlides(slidesAmount)}
    window.addEventListener("resize", resize);
   }, []);


useEffect(() => {
  getCardList({ page: 1 });
}, []);

useEffect(() => {
  if (setList.length > 0) {
     setElementsList(
      setList.map((s) => (
        <Picture key={s.code} src={cardPicture.src} alt={s.name} size="lg" title={s.name}/>
      ))
    );
  }
}, [setList ]);


const handleReachEnd = () => {
     console.log("handleReachEnd")
  const nextPage = page + 1;
  setPage(nextPage);
  getCardList({ page: nextPage });

};

    return (
        <Section >
<PrevueBlock title={routesMap.mtgCards.label} linkUrl={routesMap.mtgCards.path} >
 <SwiperCard     onReachEnd={handleReachEnd} elementsList={elementsList}  slidesPerView={slides} />
</PrevueBlock>
        </Section>


   
    )
}