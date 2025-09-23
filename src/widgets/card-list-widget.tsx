 import { CardInfo } from "@/shared/ui-kit/organisms/card-info"
import cardPicture from '../shared/ui-kit/stories/mock/assets/card.jpg';
 import { Section } from "@/shared/layout/section";
 
 export const CardListWidget = () =>{
const arr = new Array(25).fill(null);// fake

    return (
      <Section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
      {arr.map((_, i) => (
        <CardInfo
          key={i}
          src={cardPicture.src}
          name={'Командная башня'}
             type ={'Земля'}
          description="Добавьте одну ману любого цвета в цветовую принадлежность вашего командира."
          sizeImage="md"
        />
      ))}
    </div>
      </Section>

)
    
}