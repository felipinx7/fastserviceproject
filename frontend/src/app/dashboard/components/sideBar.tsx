import Image from "next/image";
import { FotoUserExemplo } from "@/assets";
import { LinkSideBar } from "@/constants/links-of-navigate-of-sideBar";

interface SideBarProps {
  onSelectSection: (
    section: "pedidos" | "adicionar" | "remover" | "avaliacoes"
  ) => void;
  selectedSection: "pedidos" | "adicionar" | "remover" | "avaliacoes";
}

const SideBar = ({ onSelectSection, selectedSection }: SideBarProps) => {
  return (
    <header className="w-[20%] max-lg:hidden h-[95vh] pt-3 flex items-start justify-start">
      <nav className="bg-[#FFBE40] w-full p-4 rounded-2xl flex flex-col justify-between items-start h-[95vh]">
        <div className="flex flex-col h-[60%] w-full items-start justify-between gap-2">
          <div className="flex items-center justify-center gap-2">
            <Image
              src={FotoUserExemplo}
              width={50}
              height={50}
              alt="Photo do Administrador"
            />
            <div className="flex flex-col">
              <p className="font-bold text-white text-[1.2rem]">
                Administrador
              </p>
              <p className="font-bold text-white">Lorem Ipsum</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center flex-col gap-1">
            {LinkSideBar.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => onSelectSection(value as any)}
                className={`w-full p-3 rounded-2xl text-left flex items-center gap-2 text-white font-bold text-[1.3rem] transition-all duration-300 ${
                  selectedSection === value
                    ? "bg-[rgba(255,106,0,0.38)]"
                    : "hover:bg-[rgba(255,106,0,0.28)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SideBar;
