"use client";

import { ButtonText } from "../atoms/button-text"
import { ButtonIconUi } from "../atoms/button-icon"
import SortIcon from '@mui/icons-material/Sort';
 import { useEffect, useState, useRef } from "react";
import clsx from "clsx";

type SortOption = { label: string; value: string };
interface Props {
  options: SortOption[];
  onChange: (value: string) => void;
}



 
 

export const Sort = ({options,onChange }:Props)=>{
const [collapsed, setCollapsed] = useState(true)
const [active, setActive] = useState<string |null>(null)
const wrapperRef = useRef<HTMLDivElement>(null);
const handleButton = (value:string)=>{
onChange(value)
setActive(value)
setCollapsed(true)
} 

const toggleCollapsed = ()=>{
    setCollapsed((prev) => !prev)
    
}


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
setCollapsed(true)
      }};
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  
    return (
        <div ref={wrapperRef} className=" bg-accent relative  "  >
                <div className=" absolute top-0 z-30    ">
                      <ButtonIconUi Icon={SortIcon} handleButton={toggleCollapsed} iconColor={active ? "text-primary-active" :" "}/>
</div> 

            
            {!collapsed     &&  <div    className={clsx(
    "shadow-lg fixed flex flex-col gap-5 p-2 bg-neutral md:absolute z-20 md:bg-neutral-light    ",
    "w-full md:max-w-72",
    "bottom-0 top-2/3 left-0 md:top-0 md:bottom-auto md:left-auto",
    "rounded-t-4xl md:rounded-md",
    "p-14 md:p-0"
  )}> 
                {options.map((option, i) => <ButtonText key={i} variant="text" value={option.label}  handleButton={()=>handleButton(option.label)} isBold={active==option.label}/>)}
                
                 </div>}
          
        </div>
     
    )
}