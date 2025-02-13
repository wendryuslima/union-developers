"use client";

import AccordionItemComponent from "./accordion-item";
import accordionOptions from "./constants/accordion";

const Doubts = () => {
  return (
    <div className="w-50 mx-auto mt-4 flex flex-col items-center gap-4 space-y-4 rounded-lg bg-gradient-to-br p-6 px-4">
      <div className="relative flex w-full max-w-md items-center justify-center lg:max-w-5xl">
        <div className="h-0.5 w-1/3 bg-gradient-to-r from-purple-500 to-transparent lg:w-5/12"></div>
        <h2 className="mt-14 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl">
          Dúvidas
        </h2>
        <div className="h-0.5 w-1/3 bg-gradient-to-l from-blue-500 to-transparent lg:w-5/12"></div>
      </div>

      <div id="dúvidas" className="mt-2 px-4">
        {accordionOptions.map((option) => (
          <AccordionItemComponent
            key={option.title}
            title={option.title}
            description={option.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Doubts;
