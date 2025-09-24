 "use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
 import { Text } from "../atoms/text";
import { ButtonIcon } from "../atoms/button-icon";
import CloseIcon from '@mui/icons-material/Close';

export type RouteNav = {
  path: string;           
  label: string;
 };


interface Props {
  logoItem:string | ReactNode
  items:RouteNav[]
 }

export const Menu = ({ logoItem, items   }: Props) =>{
  const pathname = usePathname() ?? "/";
 const [isClose, setIsClose] = useState(true)
     const wrapperRef = useRef<HTMLDivElement>(null);
 
const match =  (location:string, path:string) => location.startsWith(path)

const toggleClosed = ()=>{ setIsClose((prev)=>!prev) }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
         setIsClose(true);
      }};
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  

 return (
    <>
       <ButtonIcon Icon={MenuIcon} handleButton={toggleClosed} />
      <nav ref={wrapperRef} className={`flex flex-col   gap-10 bg-neutral h-screen w-full md:w-72 pt-5 absolute z-10  top-0 transition-all duration-500 ${isClose ? ` -left-[100%] md:-left-72 ` : 'left-0 '}`}>
<div className="mx-3 flex justify-between">
      
 {logoItem}      
    <ButtonIcon Icon={CloseIcon}  handleButton={toggleClosed} />

 </div>
     <ul className=" flex flex-col gap-1 hover:bg-neutral-dark/10 p-2">
          {items.map(({ path, label }) => {
           const active = match(pathname, path)  
           console.log(active)
              return (
              <li key={path}>
                <Link
                  href={path}
                  onClick={() => setIsClose(false)}
                   className ={`py-5 transition-colors duration-150   `}  >
                  <Text text={label} bold={active}  />
                </Link>
              </li>
            );
          })}
        </ul>
    </nav>
 
    </>


 
  );
};



