      import { Text } from "@/shared/ui-kit/atoms/text"  
      import Link from "next/link"
      
      export const LogoWidget  = ()=>{
const logoText = 'Mtg-swap'
const startUrl = '/'
     return        (
           <Link href={startUrl}>
                <Text text={logoText} bold={true} color="text-secondary"/>

      </Link>)

    }
