"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import ButtonPersonalized from "./button-personalized";

const Subscribes = () => {
  return (
    <div className="m-auto mt-20 flex w-[400px] flex-col items-center justify-center gap-4 rounded-lg bg-[#252031] p-6">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          width={280}
          height={280}
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
  );
};

export default Subscribes;
