import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/app/components/ui/sheet";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <div className="flex bg-[#121119] justify-between items-center w-full px-5 py-5">
        <div>
          <Image
            src="/logo-union-developers.svg"
            alt="logo"
            height={220}
            width={220}
          />
        </div>

        <Sheet>
          <SheetTrigger>
            <MenuIcon size={22} />
          </SheetTrigger>
          <SheetContent className="w-[300px] border-none bg-[#121119] sm:w-[300px]">
            <SheetHeader>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <div className="flex flex-col items-left mt-8 space-y-6 ">
              <a
                className="font-semibold text-white text-1xl transition-colors duration-300 hover:bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] hover:bg-clip-text hover:text-transparent"
                href="/about"
              >
                Sobre
              </a>
              <a
                className="font-semibold text-white text-1xl transition-colors duration-300 hover:bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] hover:bg-clip-text hover:text-transparent"
                href="/about"
              >
                Pilares
              </a>
              <a
                className="font-semibold text-white text-1xl transition-colors duration-300 hover:bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] hover:bg-clip-text hover:text-transparent"
                href="/about"
              >
                Beneficios
              </a>
              <a
                className="font-semibold text-white text-1xl transition-colors duration-300 hover:bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] hover:bg-clip-text hover:text-transparent"
                href="/about"
              >
                Etapas
              </a>
              <a
                className="font-semibold text-white text-1xl transition-colors duration-300 hover:bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] hover:bg-clip-text hover:text-transparent"
                href="/about"
              >
                Depoimentos
              </a>
              <a
                className="font-semibold text-white text-1xl transition-colors duration-300 hover:bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] hover:bg-clip-text hover:text-transparent"
                href="/about"
              >
                Dúvidas
              </a>

              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-5 px-5 text-2xl rounded-lg">
                Junte-se a nós
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Header;
