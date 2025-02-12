"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import ButtonPersonalized from "./button-personalized";

const Subscribes = () => {
  return (
    <div className="pl-4 pr-4">
      <div className="mx-auto mt-12 flex w-[416px] flex-col items-center justify-center gap-6 space-y-4 rounded-lg bg-[#252031] bg-gradient-to-br p-6 px-4 shadow-lg lg:w-[650px]">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-[280px] w-[280px] lg:mt-10 lg:h-[400px] lg:w-[400px]"
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
            <ButtonPersonalized text="Inscreva-se agora" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribes;
