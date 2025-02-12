"use client";

import DepoimentsCarrousel from "./depoiments-carrousel";

const Depoiments = () => {
  return (
    <div
      id="depoimentos"
      className="m-auto mx-auto mt-12 flex w-[450px] flex-col items-center justify-center gap-6 space-y-4 rounded-lg bg-gradient-to-br p-6 px-4 lg:w-[1200px]"
    >
      <div className="relative flex w-full max-w-md items-center justify-center lg:max-w-5xl">
        <div className="h-0.5 w-1/3 bg-gradient-to-r from-purple-500 to-transparent lg:w-5/12"></div>
        <h2 className="mt-14 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl">
          Depoimentos
        </h2>
        <div className="h-0.5 w-1/3 bg-gradient-to-l from-blue-500 to-transparent lg:w-5/12"></div>
      </div>

      <div className="mt-4 w-[300px]">
        <h1 className="text-center">
          Veja o que quem já passou por essa experiência fala
        </h1>
      </div>

      <DepoimentsCarrousel />
    </div>
  );
};

export default Depoiments;
