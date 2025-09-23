import { RouteNav } from "@/shared/ui-kit/organisms/menu";
 import { Menu } from "@/shared/ui-kit/organisms/menu";
import { LogoWidget } from "./logo-widget";
import { routesMap } from "@/shared/config/routes";

export const MenuWidget = ()=>{ 
 const routes:RouteNav[] = Object.values(routesMap).filter(route => route.path !== "/");
      
return (
    < Menu  logoItem= {<LogoWidget />} items ={routes} />
)

}