import { ReactNode } from "react";

interface CardOrderProps {
  children: ReactNode;
}

const CardOrder = ({ children }: CardOrderProps) => {
  return (
    <article className="w-[90%] flex items-center max-md:flex-col max-md:justify-baseline max-md:items-start justify-between rounded-2xl h-auto p-3 shadow-lg hover:outline-2 hover:outline-[#fab900] duration-[0.1s] ease-in-out transition-all">
      {children}
    </article>
  );
};

export default CardOrder;
