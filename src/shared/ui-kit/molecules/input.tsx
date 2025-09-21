import { ButtonIconUi } from "../atoms/button-icon";

interface Props {
value: string;
onHandleInput?: () => void;
onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
placeholder?: string;
type?:string,
Icon?:React.ElementType;
isBorder ?:boolean
  }


export const Input = ({  value, onHandleInput, placeholder,isBorder=false, type="text", onChange, Icon} :Props)=>{

const border = isBorder ? "border-primary" : "border-transparent"
   const onEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!onHandleInput) return;
      onHandleInput();
    }
  };
    return (
     <div className={`rounded-md flex border-1 p-1 ${border} focus-within:border-primary-hover w-full` }> 
          <input
        placeholder={placeholder || undefined}
        value={value}
        onChange={onChange}
        type={type}
        onKeyDown={onEnter}
        className={` outline-none w-full  `}
      />
               { Icon &&  
       <ButtonIconUi Icon={Icon}      
           handleButton={() => { 
             if(onHandleInput)   onHandleInput()
            }} />
}
          </div>
 
 

    )
}






 
   

  