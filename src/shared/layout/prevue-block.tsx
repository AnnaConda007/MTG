import Link from "next/link"
 import { Text } from "../ui-kit/atoms/text";
import { ReactNode } from "react";


interface Props {
  children: ReactNode;
  title:string,
  linkUrl:string
}


export const PrevueBlock  =  ({ children, title,linkUrl }: Props)=>{
    return(
         <  >
           <Link href={linkUrl}  className="block ml-4 mb-6" >
        <Text text={title} color="text-primary" fontSize="text-2xl" />
      </Link>
      {children}
    </>
    )
}