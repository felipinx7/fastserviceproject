import { linksNavigationHeader } from "@/constants/nav-links-navigation-header";
import HeaderMobile from "./headerMobile";
import Image from "next/image";
import { LogoFastService } from "@/assets";

const Header = () => {
  return (
    <header className="w-full fixed flex items-center justify-center bg-transparent z-999 pt-8 max-lg:pt-0 max-lg:py-[1rem] max-lg:px-0 px-4">
      <nav className="max-w-[1280px] w-full p-5 rounded-full m-0 flex justify-between shadow-2xl bg-white gap-4 max-lg:hidden">
        <Image src={LogoFastService} alt="Logo da empresa" width={110} />
        {linksNavigationHeader.map((link) => (
          <a href={link.id} key={link.id} className="font-[600] text-[1.3rem]">
            {link.nome}
          </a>
        ))}
      </nav>
      <HeaderMobile />
    </header>
  );
};

export default Header;
