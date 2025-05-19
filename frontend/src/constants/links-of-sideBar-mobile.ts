import {
    ShoppingCart,
    PlusSquare,
    Trash2,
    Star,
    LucideIcon,
  } from "lucide-react";
  
  interface LinkType {
    label: string;
    value: "pedidos" | "adicionar" | "remover" | "avaliacoes";
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }
  
  export const LinkSideBarMobile: LinkType[] = [
    {
      label: "Pedidos",
      value: "pedidos",
      icon: ShoppingCart,
    },
    {
      label: "Adicionar",
      value: "adicionar",
      icon: PlusSquare,
    },
    {
      label: "Remover",
      value: "remover",
      icon: Trash2,
    },
    {
      label: "Avaliações",
      value: "avaliacoes",
      icon: Star,
    },
  ];
  