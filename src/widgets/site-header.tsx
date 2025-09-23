
import { MenuWidget } from "./menu-widget"
import { LogoWidget } from "./logo-widget"
export const HeaderWidget = ()=>{
    return (
        <div className="  flex justify-between w-full bg-primary p-5">
         <MenuWidget />
<LogoWidget />             </div>
    )

}