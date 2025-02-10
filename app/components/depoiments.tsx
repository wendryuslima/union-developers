"use client";

import DepoimentsCarrousel from "./depoiments-carrousel";

const Depoiments = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center">
      <div className="relative m-auto flex w-full max-w-md items-center justify-center">
        <div className="h-0.5 w-1/3 bg-gradient-to-r from-purple-500 to-transparent"></div>
        <h2 className="mt-12 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-2xl font-semibold text-transparent">
          Depoimentos
        </h2>
        <div className="h-0.5 w-1/3 bg-gradient-to-l from-blue-500 to-transparent"></div>
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
