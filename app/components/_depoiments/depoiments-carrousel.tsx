"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

import depoimentsOptions from "../constants/depoiments";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

const DepoimentsCarrousel = () => {
  return (
    <Carousel className="relative w-full max-w-md">
      <CarouselContent>
        {depoimentsOptions.map((depoiment, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <div className="m-auto mt-8 flex w-[300px] flex-col items-center justify-center gap-5 space-y-5 rounded-lg border border-b-violet-600 border-r-blue-700 border-s-blue-800 border-t-violet-600 px-4 py-4">
              <Image
                className="m-auto rounded-full"
                src={depoiment.image}
                alt={depoiment.name}
                width={100}
                height={100}
              />
              <h1 className="m-auto items-center text-center text-2xl font-bold text-white">
                {depoiment.name}
              </h1>
              <p className="text-center text-white">{depoiment.description}</p>
              <div className="flex items-center justify-center">
                <div className="mx-auto mr-7 flex flex-col items-center justify-center">
                  <Linkedin />
                  <p className="bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent">
                    Linkedin
                  </p>
                </div>

                <div className="mx-auto flex flex-col items-center justify-center">
                  <Github />
                  <p className="bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent">
                    Github
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)]" />
      <CarouselNext className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)]" />
    </Carousel>
  );
};

export default DepoimentsCarrousel;
