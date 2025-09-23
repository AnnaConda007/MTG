import { ReactNode } from "react"; 

interface Props {
  children: ReactNode; 
}

export const Section = ({ children}: Props) => {
  return (
    <section className="mt-5 ">
        
      {children}
    </section>
  );
};
