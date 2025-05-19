import { ReactNode } from "react";

interface CardProps{
    children: ReactNode;
}


const Card = ({children}: CardProps) => {
    return ( 
        <article className="flex bg-[#FFEABF] rounded-2xl max-h-[300px] max-w-[350px] pb-[5rem] px-4 items-center justify-center flex-col">
            {children}
        </article>
     );
}
 
export default Card;