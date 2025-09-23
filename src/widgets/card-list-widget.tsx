 import { CardInfo } from "@/shared/ui-kit/organisms/card-info"
import cardImg from '../shared/ui-kit/stories/mock/assets/card.jpg';

 export const CardListWidget = () =>{
const arr = new Array(25).fill(null);// fake

    return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
      {arr.map((_, i) => (
        <CardInfo
          key={i}
          src={cardImg.src}
          name={'Командная башня'}
             type ={'Земля'}
          description="Добавьте одну ману любого цвета в цветовую принадлежность вашего командира."
          sizeImage="md"
        />
      ))}
    </section>
)
    
}