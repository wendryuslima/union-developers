"use client";

import AccordionItemComponent from "./accordion-item";
import accordionOptions from "./constants/accordion";

const Doubts = () => {
  return (
    <div className="flex flex-col lg:w-full">
      <div className="relative mt-12 flex flex-col items-center text-center lg:mt-16">
        <div className="relative flex w-full max-w-md items-center justify-center lg:max-w-5xl">
          <div className="h-0.5 w-1/3 bg-gradient-to-r from-purple-500 to-transparent lg:w-5/12"></div>
          <h2 className="mt-14 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl">
            Dúvidas
          </h2>
          <div className="h-0.5 w-1/3 bg-gradient-to-l from-blue-500 to-transparent lg:w-5/12"></div>
        </div>
      </div>

      <div className="mt-4 px-4">
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
