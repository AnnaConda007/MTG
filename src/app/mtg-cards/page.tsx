 "use client";

 import { CardListWidget } from "@/widgets/card-list-widget"
import { SearchWidget } from "@/widgets/search-widget";
 import { Toolbar } from "@/widgets/toolbar";
export default function MtgCardsPage() {
  


  return (
    <>
 <SearchWidget />
<Toolbar />
 <CardListWidget />
    </>

  );
}
