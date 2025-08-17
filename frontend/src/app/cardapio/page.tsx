"use client";

import { FundoPromocao, PhotoOrder } from "@/assets";
import Card from "./components/cardOrde";
import Header from "./components/header";
import { NameCatgoryInfo } from "@/constants/info-names-category-carpad";
import "../globals.css";
import React, { useEffect, useState } from "react";
import CardCart from "./components/cardCart";
import { IoClose } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import Image from "next/image";
import { MdOutlinePix } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import DisplayAlert from "./components/displayAlertSucess";

// Typing data of products
interface Product {
  id: number;
  photo: any;
  name: string;
  price: number;
  quantify?: number;
  productInAdded: boolean;
}

const Cardapio = () => {
  //States utils in page
  const [Prodcuts, setProdcuts] = useState<Product[]>([
    {
      id: 1,
      name: "Grilled Steak",
      photo: PhotoOrder,
      price: 90,
      productInAdded: true,
      quantify: 1,
    },
    {
      id: 2,
      name: "Spaghetti Bolognese",
      photo: PhotoOrder,
      price: 75,
      productInAdded: true,
      quantify: 1,
    },
    {
      id: 3,
      name: "Chicken Parmesan",
      photo: PhotoOrder,
      price: 85,
      productInAdded: true,
      quantify: 1,
    },
    {
      id: 4,
      name: "Vegetable Stir Fry",
      photo: PhotoOrder,
      price: 65,
      productInAdded: true,
      quantify: 1,
    },
    {
      id: 5,
      name: "Shrimp Tacos",
      photo: PhotoOrder,
      price: 95,
      productInAdded: true,
      quantify: 1,
    },
    {
      id: 6,
      name: "Beef Burrito",
      photo: PhotoOrder,
      price: 80,
      productInAdded: true,
      quantify: 1,
    },
    {
      id: 7,
      name: "Caesar Salad",
      photo: PhotoOrder,
      price: 55,
      productInAdded: true,
      quantify: 1,
    },
    {
      id: 8,
      name: "Grilled Salmon",
      photo: PhotoOrder,
      price: 110,
      productInAdded: true,
      quantify: 1,
    },
    {
      id: 9,
      name: "Cheeseburger",
      photo: PhotoOrder,
      price: 70,
      productInAdded: true,
      quantify: 1,
    },
    {
      id: 10,
      name: "Margherita Pizza",
      photo: PhotoOrder,
      price: 85,
      productInAdded: true,
      quantify: 1,
    },
  ]);
  //State for storage value inp
  const [valueInput, setValueInput] = useState("");
  //State for show values filter
  const ProductsFilter = Prodcuts.filter((products) =>
    products.name.toLowerCase().includes(valueInput.toLowerCase())
  );
  //State for manipulate Visibility of Cart Mobile
  const [showCartMobile, setShowCartMobile] = useState(false);
  //State of storage products
  const [cartOfProducts, setCartOfProducts] = useState<Product[]>([]);
  //State for Storage of Procuts confirmed
  const [productsFinished, setProductsFinished] = useState<Product[]>([]);
  //State for add Product in cart
  const [productInAdded, setProductInAdded] = useState<Product | null>(null);
  //State for increase Quantify of Product
  const [quantifyProduct, setQuantifyProduct] = useState<number>(1);
  //State for update the visibility of button
  const [visibilityButton, setVisibilityButton] = useState<Boolean>(false);
  //State for take type of payment of client
  const [methodPayment, setMethodPayment] = useState("");
  //State for Visibility of Display evaluation
  const [showDisplayAlert, setShowDisplayAlert] = useState(false);

  //Function for manipulate Visibility Cart Mobile
  const handleVisibilityCartMobile = () => {
    setShowCartMobile((prev) => !prev);
    console.log(`State is: ${showCartMobile}`);
  };
  //Function for manipulate Visibility Display evaluation
  const handleDisplayAlert = () => {
    setShowDisplayAlert((prev) => !prev);
  };
  //Function for take value input
  const handleValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  };
  //Function add Product to cart
  const addProductToCart = (product: Product) => {
    setProductInAdded(product);
    console.log("Product In Added with Success!!");

    setProdcuts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === product.id
          ? { ...item, productInAdded: !item.productInAdded }
          : item
      )
    );

    setProductInAdded((prev) =>
      prev?.id === product.id
        ? { ...prev, productInAdded: !prev.productInAdded }
        : prev
    );
  };
  //Function for Finished Order
  const handleFinishedOrder = () => {
    if (cartOfProducts.length === 0) {
      alert("Your cart is empty! Try again.");
      return;
    }

    if (!methodPayment) {
      alert("Please select a payment method.");
      return;
    }

    const finishedProducts = [...cartOfProducts];
    setProductsFinished(finishedProducts);
    setCartOfProducts([]);
    handleDisplayAlert();

    console.log("Finished products:", finishedProducts);
    console.log("Payment method:", methodPayment);
  };

  //UseEffect for send Products if size > 0
  useEffect(() => {
    if (productsFinished.length > 0) {
      console.log("Produtos finalizados:", productsFinished);
    }
  }, [productsFinished]);

  //Function for manipulate the visibility of button
  const handleVisibilityOfButton = (product: Product) => {
    setProdcuts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === product.id
          ? { ...item, productInAdded: !item.productInAdded }
          : item
      )
    );

    setProductInAdded((prev) =>
      prev?.id === product.id
        ? { ...prev, productInAdded: !prev.productInAdded }
        : prev
    );
  };

  //Function for Confirmation of quantify
  const handleConfirmQuantify = (id: number) => {
    const selectedProduct = Prodcuts.find((item) => item.id === id);

    if (selectedProduct) {
      setProdcuts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === id ? { ...item, productInAdded: true } : item
        )
      );
      setProductInAdded(selectedProduct);
    }
    console.log(selectedProduct);
  };

  // Function increase quantify
  const handleAddQuantifyProduct = (id: number) => {
    setProdcuts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id ? { ...item, quantify: (item.quantify ?? 1) + 1 } : item
      )
    );
    setCartOfProducts((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantify: (item.quantify ?? 1) + 1 } : item
      )
    );
  };

  // Function for Remover Quantify
  const handleRemoverQuantifyProduct = (id: number) => {
    setProdcuts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id && item.quantify && item.quantify > 1
          ? { ...item, quantify: item.quantify - 1 }
          : item
      )
    );
    setCartOfProducts((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantify && item.quantify > 1
          ? { ...item, quantify: item.quantify - 1 }
          : item
      )
    );
  };

  //Function Remover Product of Cart
  const removerProductCart = (id: number) => {
    setCartOfProducts((prev) => prev.filter((item) => item.id !== id));
  };

  //Function for Confirm the quantify and add to cart
  const confirmAndAddProduct = (id: number) => {
    const selectedProduct = Prodcuts.find((item) => item.id === id);

    if (selectedProduct) {
      const productInCart = cartOfProducts.find((item) => item.id === id);

      if (productInCart) {
        // Updates the quantity in the cart based on the current item.quantify
        setCartOfProducts((prevCart) =>
          prevCart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantify:
                    (item.quantify ?? 0) + (selectedProduct.quantify ?? 1),
                }
              : item
          )
        );
      } else {
        // Adds a new product to the cart with the current quantity of the product
        setCartOfProducts((prevCart) => [...prevCart, { ...selectedProduct }]);
      }

      // Marks as added and clears the temporary state
      setProdcuts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === id ? { ...item, productInAdded: true } : item
        )
      );

      setProductInAdded(null);
    }
  };

  return (
    <section className="bg-[#ECECEC] w-full min-h-[100vh] px-5 pr-8 h-[100%]">
      <Header />
      {/* Article part Carr  */}
      <article className="w-[25%] bg-white max-lg:hidden flex flex-col py-4 gap-4 px-4 h-screen top-0 right-0 fixed">
        <h1 className="font-bold text-3xl">Ordem de Pedidos</h1>
        <div className="h-[60vh] overflow-y-auto flex flex-col items-start gap-3 ">
          {cartOfProducts.map((order) => (
            <CardCart
              key={order.id}
              name={order.name}
              photo={order.photo}
              price={order.price}
              quantify={order.quantify}
              handleAddQuantifyProduct={() =>
                handleAddQuantifyProduct(order.id)
              }
              handleRemoverQuantifyProduct={() =>
                handleRemoverQuantifyProduct(order.id)
              }
              removerProductCard={() => removerProductCart(order.id)}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center gap-16">
          <button
            onClick={() => setMethodPayment("Pix")}
            className={`border-2 w-[3rem] h-[3rem] flex items-center justify-center text-3xl rounded-[5.97px] duration-[0.5s] ease-in-out p-2 text-black
      ${
        methodPayment === "Pix"
          ? "bg-[#fba900] text-white border-[#fba900]"
          : "border-[#999] hover:bg-amber-500 hover:text-white"
      }`}
          >
            <MdOutlinePix />
          </button>

          <button
            onClick={() => setMethodPayment("Card")}
            className={`border-2 w-[3rem] h-[3rem] flex items-center justify-center text-3xl rounded-[5.97px] duration-[0.5s] ease-in-out p-2 text-black
      ${
        methodPayment === "Card"
          ? "bg-[#fba900] text-white border-[#fba900]"
          : "border-[#999] hover:bg-amber-500 hover:text-white"
      }`}
          >
            <FaMoneyBillWave />
          </button>

          <button
            onClick={() => setMethodPayment("Money")}
            className={`border-2 w-[3rem] h-[3rem] flex items-center justify-center text-3xl rounded-[5.97px] duration-[0.5s] ease-in-out p-2 text-black
      ${
        methodPayment === "Money"
          ? "bg-[#fba900] text-white border-[#fba900]"
          : "border-[#999] hover:bg-amber-500 hover:text-white"
      }`}
          >
            <FaCreditCard />
          </button>
        </div>

        <div className="h-[20vh] bg-[#EDEDED] p-5 flex flex-col justify-between rounded-2xl">
          <div className="w-full flex items-center justify-between">
            <p className="text-[#6F6F6F] font-bold text-[1.3rem]">Sub Total</p>
            <h5 className="font-bold">
              R$
              {cartOfProducts
                .reduce((total, item) => {
                  const quantifyProducts = item.quantify ?? 0;
                  const PriceProducts = item.price ?? 0;
                  return total + quantifyProducts * PriceProducts;
                }, 0)
                .toFixed(2)}
            </h5>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-[#6F6F6F] font-bold text-[1.3rem]">Desconto</p>
            <h5 className="font-bold">R$0,00</h5>
          </div>
          <div className="w-full flex items-center justify-between">
            <h1 className="text-black font-bold text-2xl">Valor Total</h1>
            <h5 className="font-bold text-black">
              R$
              {cartOfProducts
                .reduce((total, item) => {
                  const quantifyProducts = item.quantify ?? 0;
                  const PriceProducts = item.price ?? 0;
                  return total + quantifyProducts * PriceProducts;
                }, 0)
                .toFixed(2)}
            </h5>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleFinishedOrder}
          disabled={cartOfProducts.length === 0}
          className={`text-white font-bold text-2xl p-2 rounded-2xl duration-[0.5s] ease-in-out
            ${
              cartOfProducts.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#fba900] hover:bg-amber-500 cursor-pointer"
            } text-white font-bold text-2xl p-2 cursor-pointer ${
            cartOfProducts.length === 0
              ? "hover:bg-gray-300"
              : "hover:bg-amber-500"
          } duration-[0.5s] ease-in-out   rounded-2xl`}
        >
          Preparar
        </button>
      </article>
      {/* Article Part Cart Mobile  */}
      {showCartMobile ? (
        <article className="fixed bg-white z-[9999999] p-2 overflow-y-auto px top-0 left-0 flex-col gap-2 w-full h-screen">
          <div className="w-full flex items-center justify-between mb-2">
            <h1 className="font-bold text-4xl">Ordem de Pedidos</h1>
            <button
              onClick={handleVisibilityCartMobile}
              className="bg-[#fba900] p-3 hover:bg-amber-500 duration-[0.5s] ease-in-out cursor-pointer rounded-[5.97px] font-bold text-3xl text-white "
            >
              <IoClose />
            </button>
          </div>
          <div className="h-[60vh] overflow-y-auto flex flex-col items-start gap-3 ">
            {cartOfProducts.map((order) => (
              <CardCart
                key={order.id}
                name={order.name}
                photo={order.photo}
                price={order.price}
                quantify={order.quantify}
                handleAddQuantifyProduct={() =>
                  handleAddQuantifyProduct(order.id)
                }
                handleRemoverQuantifyProduct={() =>
                  handleRemoverQuantifyProduct(order.id)
                }
                removerProductCard={() => removerProductCart(order.id)}
              />
            ))}
          </div>
          <div className="w-full flex items-center justify-start mb-4 gap-16">
            <button
              onClick={() => setMethodPayment("Pix")}
              className={`border-2 w-[3rem] h-[3rem] flex items-center justify-center text-3xl rounded-[5.97px] duration-[0.5s] ease-in-out p-2 text-black
      ${
        methodPayment === "Pix"
          ? "bg-[#fba900] text-white border-[#fba900]"
          : "border-[#999] hover:bg-amber-500 hover:text-white"
      }`}
            >
              <MdOutlinePix />
            </button>

            <button
              onClick={() => setMethodPayment("Card")}
              className={`border-2 w-[3rem] h-[3rem] flex items-center justify-center text-3xl rounded-[5.97px] duration-[0.5s] ease-in-out p-2 text-black
      ${
        methodPayment === "Card"
          ? "bg-[#fba900] text-white border-[#fba900]"
          : "border-[#999] hover:bg-amber-500 hover:text-white"
      }`}
            >
              <FaMoneyBillWave />
            </button>

            <button
              onClick={() => setMethodPayment("Money")}
              className={`border-2 w-[3rem] h-[3rem] flex items-center justify-center text-3xl rounded-[5.97px] duration-[0.5s] ease-in-out p-2 text-black
      ${
        methodPayment === "Money"
          ? "bg-[#fba900] text-white border-[#fba900]"
          : "border-[#999] hover:bg-amber-500 hover:text-white"
      }`}
            >
              <FaCreditCard />
            </button>
          </div>
          <div className="h-[20vh] bg-[#EDEDED] p-5 flex flex-col justify-between rounded-2xl">
            <div className="w-full flex items-center justify-between">
              <p className="text-[#6F6F6F] font-bold text-[1.3rem]">
                Sub Total
              </p>
              <h5 className="font-bold">
                R$
                {cartOfProducts
                  .reduce((total, item) => {
                    const quantifyProducts = item.quantify ?? 0;
                    const PriceProducts = item.price ?? 0;
                    return total + quantifyProducts * PriceProducts;
                  }, 0)
                  .toFixed(2)}
              </h5>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-[#6F6F6F] font-bold text-[1.3rem]">Desconto</p>
              <h5 className="font-bold">R$0,00</h5>
            </div>
            <div className="w-full flex items-center justify-between">
              <h1 className="text-black font-bold text-2xl">Valor Total</h1>
              <h5 className="font-bold text-black">
                R$
                {cartOfProducts
                  .reduce((total, item) => {
                    const quantifyProducts = item.quantify ?? 0;
                    const PriceProducts = item.price ?? 0;
                    return total + quantifyProducts * PriceProducts;
                  }, 0)
                  .toFixed(2)}
              </h5>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleFinishedOrder}
            disabled={cartOfProducts.length === 0}
            className={`text-white w-full font-bold text-2xl p-3 mt-3 rounded-2xl duration-[0.5s] ease-in-out
            ${
              cartOfProducts.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#fba900] hover:bg-amber-500 cursor-pointer"
            } text-white font-bold text-2xl p-2 cursor-pointer ${
              cartOfProducts.length === 0
                ? "hover:bg-gray-300"
                : "hover:bg-amber-500"
            } duration-[0.5s] ease-in-out   rounded-2xl`}
          >
            Preparar
          </button>
        </article>
      ) : null}
      {/* Article Part Banner Promotion  */}
      <article className="w-[75%] max-lg:w-full flex items-center justify-center bg-[#D9D9D9] h-[220px] mb-[2rem] rounded-2xl relative">
        <Image
          src={FundoPromocao}
          className="w-full h-[100%] rounded-2xl"
          alt="Imagem De Promoção"
        />
        <div className="absolute flex items-center justify-center gap-4 bg-[#ECECEC] w-[10rem] bottom-0 max-lg:left-[35%] left-[45%] rounded-tl-4xl rounded-tr-4xl h-[2rem]">
          <div className="bg-[#fba900] w-[0.7rem] h-[0.7rem] rounded-full"></div>
          <div className="bg-[#fba900] w-[0.7rem] h-[0.7rem] rounded-full"></div>
          <div className="bg-[#fba900] w-[0.7rem] h-[0.7rem] rounded-full"></div>
        </div>
      </article>
      {/* Part of Input */}
      <div className="w-[75%] max-lg:w-full flex items-center justify-center">
        <input
          type="text"
          value={valueInput}
          onChange={handleValueInput}
          placeholder="Search Products Here..."
          className="bg-[#D4D4D4] opacity-[.53] w-[70%] max-lg:w-full text-center py-3 rounded-3xl"
        />
        <div
          onClick={handleVisibilityCartMobile}
          className="hidden bg-white p-3 rounded-2xl z-20 cursor-pointer duration-[0.5s] ease-in-out text-[#fba900] absolute right-10 max-lg:block"
        >
          <HiShoppingCart />
        </div>
      </div>
      {/* Part of categories  */}
      <div className="flex items-center max-lg:hidden justify-center mb-[2rem] gap-[7.5rem] mt-[2rem] w-[75%] max-lg:w-full">
        {NameCatgoryInfo.map((link, index) => (
          <div
            key={index}
            className="flex cursor-pointer hover:border-b-3 hover:rounded-[0.2rem] transition-all duration-[0.1s] ease-in-out hover:text-[#fba900] hover:border-[#fab900] text-[1.3rem] font-[600] text-[#7E7E7E] flex-row-reverse items-center justify-center gap-2"
          >
            <p>{link.name}</p>
            <link.Icon className="text-[#fab900] text-[1.8rem]" />
          </div>
        ))}
      </div>
      {/* Part of Order */}
      <div className="w-full lg:w-[75%] h-[80vh] px-3 overflow-y-auto scrollbar-none grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] place-items-baseline items-start">
        {ProductsFilter.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            photo={item.photo}
            price={item.price}
            quantify={item.quantify}
            productInAdded={item.productInAdded}
            ProductAddInCart={() => confirmAndAddProduct(item.id)}
            handleAddProcutInCart={() => addProductToCart(item)}
            handleAddQuantifyProduct={() => handleAddQuantifyProduct(item.id)}
            handleRemoverQuantifyProduct={() =>
              handleRemoverQuantifyProduct(item.id)
            }
            confirmQuantify={() => handleConfirmQuantify(item.id)}
          />
        ))}
      </div>
      <DisplayAlert
        handleDisplayAlert={handleDisplayAlert}
        showDisplayAlert={showDisplayAlert}
      />
    </section>
  );
};

export default Cardapio;
