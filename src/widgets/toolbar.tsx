import { Sort } from "@/shared/ui-kit/molecules/sort"
import { Section } from "@/shared/layout/section";

  const options= [{label:"По убыванию", value:""}, {label:"По уменшению", value:""}]
     const onChange =(value:string)=>{}


export const Toolbar = ()=>{ 
    return(
        <Section>
                                   <Sort  options={options} onChange={onChange}/> 
</Section>

        
     )
}


