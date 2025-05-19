import React from "react";
import { ClipboardList, PlusCircle, MinusCircle, Star } from "lucide-react";

interface SideBarMobileProps {
  selectedSection: "pedidos" | "adicionar" | "remover" | "avaliacoes";
  onSelectSection: (
    section: "pedidos" | "adicionar" | "remover" | "avaliacoes"
  ) => void;
}

const SideBarMobile = ({
  selectedSection,
  onSelectSection,
}: SideBarMobileProps) => {
  return (
    <div className="fixed gap-3 bottom-0 w-full h-[4rem] z-[9999] max-lg:flex hidden justify-around items-center bg-white p-2 shadow-md">
      {[
        { icon: ClipboardList, label: "Pedidos", value: "pedidos" },
        { icon: PlusCircle, label: "Adicionar", value: "adicionar" },
        { icon: MinusCircle, label: "Remover", value: "remover" },
        { icon: Star, label: "Avaliação", value: "avaliacoes" },
      ].map(({ icon: Icon, label, value }) => (
        <button
          key={value}
          onClick={() =>
            onSelectSection(value as SideBarMobileProps["selectedSection"])
          }
          className={`flex flex-col items-center justify-center gap-1 w-full py-1 rounded-md transition-all duration-300 ease-in-out
            ${
              selectedSection === value
                ? "bg-[#FBA900] text-white"
                : "text-black hover:bg-[#FBA900] hover:text-white"
            }`}
        >
          <Icon className="w-6 h-6" />
          <span className="text-xs font-semibold">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default SideBarMobile;
