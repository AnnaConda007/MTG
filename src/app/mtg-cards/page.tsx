 "use client";

 import { CardListWidget } from "@/widgets/card-list-widget"
import { SearchWidget } from "@/widgets/search-widget";
 import { Sort } from "@/shared/ui-kit/molecules/sort";

export default function MtgCardsPage() {
  const options= [{label:"По убыванию", value:""}, {label:"По уменшению", value:""}]
     const onChange =(value:string)=>{}


  return (
    <>
 <SearchWidget />
 <section> 
  <Sort  options={options} onChange={onChange}/> 
 </section>
 <CardListWidget />
    </>

  );
}
