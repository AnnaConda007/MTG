"use client";
 import { useSearch } from "@/features/search/model/useSearch" 
import { useState } from 'react';
 import { SearchInput } from "@/shared/ui-kit/organisms/search";

export const SearchWidget = ()=>{
const { results, search } = useSearch();
const [value, setValue] = useState("")
 
const res = results.map((res)=><div key={res.name}>{res.name}</div>)
    
const OnChangeSearch = (value:string)=>{
         search(value)
        setValue(value)
    }


   return(
      <div className="py-3">
         <SearchInput  searchResults={res}   OnChangeSearch={OnChangeSearch} 
 value={value} />
      </div>

   )
}



