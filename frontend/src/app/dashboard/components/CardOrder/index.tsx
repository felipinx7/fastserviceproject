import Price from "./CardOrdePrice";
import Botoes from "./CardOrderBotoes";
import NumberMesa from "./CardOrderMesa";
import Name from "./CardOrderName";
import Quantify from "./CardOrderQuantify";
import CardOrder from "./CardOrderRoot";

export const Order = {
  Root: CardOrder,
  Payment: Name,
  buttoes: Botoes,
  quantify: Quantify,
  mesa: NumberMesa,
  price: Price,
};
