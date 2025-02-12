"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Main = () => {
  return (
    <div className="relative flex w-full bg-cover p-[5.6rem_1.6rem_1.2rem] lg:mt-12 lg:h-[100vh] lg:flex-row lg:items-center lg:justify-center">
      {/* Imagem de fundo */}

      {/* Conteúdo */}
      <div className="items-left flex w-[300px] flex-col gap-4 lg:w-[600px]">
        <h2 className="text-2xl font-bold text-white lg:text-4xl">
          Ganhe{" "}
          <span className="bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent">
            experiência{" "}
          </span>{" "}
          como desenvolvedor júnior
        </h2>
        <p className="lg:mt-4 lg:w-[470px] lg:text-lg">
          Descubra como o Union oferece um ambiente prático e imersivo para
          desenvolvedores juniors ganharem experiência de mercado, mesmo sem
          estar em uma empresa. Participe dessa experiência única e impulsione
          sua carreira como desenvolvedor!
        </p>
        <Button className="rounded-md bg-gradient-to-r from-purple-800 to-blue-600 px-7 py-7 text-xl font-bold text-white lg:mt-3 lg:max-w-[300px]">
          Quero participar
        </Button>
      </div>

      {/* Animação do logo */}
      <div className="hidden lg:block">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            width={350}
            height={350}
            src="/remember-action-logo.svg"
            alt="logo"
            className="scale-x-[-1]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
