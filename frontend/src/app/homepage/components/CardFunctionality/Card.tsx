import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <article className="flex max-w-[400px] w-[100%] max-h-[350px] h-[100%] flex-col items-center justify-center py-6 px-4 gap-4 hover:bg-amber-100 transition-all ease-in-out duration-[0.4s] rounded-[1.1rem] hover:border-b-[#fba900] hover:border-b-[5px]">
      {children}
    </article>
  );
};

export default Card;
