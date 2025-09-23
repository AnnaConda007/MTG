import { ReactNode } from "react";
import Link from "next/link";
import { Text } from "../atoms/text";

interface Props {
  children: ReactNode;
  title:string,
  linkUrl:string
}

export const Section = ({ children, title,linkUrl }: Props) => {
  return (
    <section className="mt-5">
           <Link href={linkUrl}  className="block ml-4 mb-6" >
        <Text text={title} color="text-primary" fontSize="text-2xl" />
      </Link>
      {children}
    </section>
  );
};
