"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Button } from "./ui/button";

const Subscribes = () => {
  return (
    <div className="w-50 mx-auto mt-12 flex flex-col items-center justify-center gap-6 space-y-4 rounded-lg bg-[#252031] bg-gradient-to-br p-6 px-4 px-8 shadow-lg lg:w-[650px]">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="h-[300px] w-[280px] lg:mt-10 lg:h-[400px] lg:w-[400px]"
      >
        <Image
          width={600}
          height={600}
          src="/remember-action-logo.svg"
          alt="logo"
        />
      </motion.div>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">
          Vivencie na prática, ambiente imersivo, desafios e muito mais!
        </h1>
        <motion.h1
          className="mt-8 text-3xl font-bold text-red-500"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          Inscreva-se já! Vagas limitadas
        </motion.h1>

        <div className="mt-4">
          <Button className="hover:blue-l-blue-800 relative w-[300px] overflow-hidden rounded-md border-transparent bg-gradient-to-r from-purple-900 to-blue-600 px-5 py-5 text-sm font-bold text-white transition-all duration-300 before:absolute before:inset-0 before:w-0 before:bg-[#121119] before:transition-all before:duration-300 hover:border-2 hover:border-b-blue-800 hover:border-r-purple-900 hover:border-t-purple-700 hover:before:w-full">
            <a href="#time" className="relative z-10">
              Inscreva-se agora
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribes;
