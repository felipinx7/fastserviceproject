"use client";

import Image from "next/image";
import { PhotoBackgroundLogin } from "@/assets";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";

const Register = () => {
  //Creating states of inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [mensagemError, setMensagemError] = useState("");

  //Creating Fuction of update
  const updateInfoForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Creating Fuction submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Clear error mensage
    setMensagemError("");

    if (formData.password.length < 6) {
      setMensagemError("A senha deve ter no minimo 6 caracteres.");
      return;
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setMensagemError(
        "Por favor, insira um email válido (exemplo@dominio.com)"
      );
      return;
    }

    try {
      const { data: token } = await api.post("/balconista/login", {
        email: formData.email,
        password: formData.password,
      });

      // Clear data input
      setFormData({
        email: "",
        password: "",
      });

      router.push("/dashboard");

      localStorage.setItem("token", token);
      console.log(token);
      alert("Login realizado com sucesso!");
    } catch (error: any) {
      setMensagemError(error.response?.data || error.message);
      console.log("Erro ao cadastrar:", error.response?.data || error.message);
      alert("Erro ao cadastrar o usuário.");
    }
  };

  return (
    <section className="w-full h-screen flex items-end justify-end relative">
      <Image
        src={PhotoBackgroundLogin}
        alt="Photo of background"
        className="absolute inset-0 h-screen max-lg:hidden object-cover z-0"
      />
      <div className="bg-white w-[50%] px-4 max-lg:w-full flex flex-col items-center justify-center h-screen z-10 relative shadow-lg">
        <h1 className="text-[#fba900] font-bold text-6xl max-lg:mb-8">
          Entrar
        </h1>
        <form
          className="w-full flex flex-col items-center justify-center px-8"
          onSubmit={handleSubmit}
        >
          <div className="w-full mb-4">
            <label
              htmlFor="email"
              className="text-[#fba900] text-[1.4rem] font-semibold block mb-2"
            >
              Email
            </label>
            <div className="relative w-full">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={updateInfoForm}
                placeholder="Digite seu email"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-[#fba900] focus:border-[#fba900] transition-all duration-[0.5s] ease-in-out"
                required
              />
            </div>
          </div>
          <div className="w-full mb-4">
            <label
              htmlFor="senha"
              className="text-[#fba900] text-[1.4rem] font-semibold block mb-2"
            >
              Senha
            </label>
            <div className="relative w-full">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={updateInfoForm}
                placeholder="Digite uma senha"
                className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-[#fba900] focus:border-[#fba900] transition-all duration-[0.5s] ease-in-out"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#fba900] rounded-[5.97px] text-white font-bold w-full p-3 text-[1.2rem] cursor-pointer hover:bg-[#fb9200] transition-all ease-in-out duration-[0.5s]"
          >
            Entrar
          </button>
          <div>
            <p className="text-[#fba900] font-[600] mt-3 text-[1.2rem]">
              não tem uma conta?{" "}
              <Link href="/register" className="text-[#fba800]">
                clique aqui
              </Link>
            </p>
          </div>
          {mensagemError && (
            <div className="w-full flex items-center justify-center mt-5">
              <p className="text-red-500 font-[600] text-center  text-[1.2rem]">
                {mensagemError}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Register;
