"use client";

import { useState } from "react";
import Avaliacao from "./avaliacao/page";
import Cadastrar from "./cadastrar/page";
import SideBar from "./components/sideBar";
import Excluir from "./excluir/page";
import Pedidos from "./pedidos/page";
import SideBarMobile from "./components/sideBarMobile";

const Dashboard = () => {
  //Array de sections
  const sections = {
    pedidos: <Pedidos />,
    adicionar: <Cadastrar />,
    remover: <Excluir />,
    avaliacoes: <Avaliacao />,
  };
  //State for storage value Scetion
  const [selectedSection, setSelectedSection] =
    useState<keyof typeof sections>("pedidos");
  return (
    <main className="bg-[#F3F3F3] w-full h-screen flex justify-between px-4 py-2 max-lg:p-0">
      <SideBar
        onSelectSection={setSelectedSection}
        selectedSection={selectedSection}
      />
      <SideBarMobile
        onSelectSection={setSelectedSection}
        selectedSection={selectedSection}
      />

      <section className="w-[80%] max-lg:w-full max-lg:p-0 p-6">
        {sections[selectedSection]}
      </section>
    </main>
  );
};

export default Dashboard;