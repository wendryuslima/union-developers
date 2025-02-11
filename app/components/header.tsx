import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/app/components/ui/sheet";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between space-x-4 bg-[#121119] px-5 py-5 lg:justify-center">
      <div className="mr-3 items-center">
        <Image
          src="/logo-union-developers.svg"
          alt="Union Developers"
          height={180}
          width={180}
        />
      </div>

      {/* Menu Desktop */}
      <nav className="hidden lg:flex lg:items-center lg:space-x-6">
        {[
          "Sobre",
          "Pilares",
          "Benefícios",
          "Etapas",
          "Depoimentos",
          "Dúvidas",
        ].map((item, index) => (
          <a
            key={index}
            className="text-sm font-semibold text-white transition-colors duration-300 hover:bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] hover:bg-clip-text hover:text-transparent lg:text-base"
            href={`/${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="ml-4 hidden lg:block">
        <Button className="w-[220px] rounded-md bg-gradient-to-r from-purple-900 to-blue-600 px-6 py-6 text-sm font-bold text-white">
          Junte-se a nós
        </Button>
      </div>

      {/* Menu Mobile */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon size={24} color="white" />
          </SheetTrigger>
          <SheetContent className="w-[300px] border-none bg-[#121119]">
            <SheetHeader />
            <div className="mt-8 flex flex-col space-y-6">
              {[
                "Sobre",
                "Pilares",
                "Benefícios",
                "Etapas",
                "Depoimentos",
                "Dúvidas",
              ].map((item, index) => (
                <a
                  key={index}
                  className="text-sm font-semibold transition-colors duration-300 hover:bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] hover:bg-clip-text hover:text-transparent"
                  href={`/${item.toLowerCase()}`}
                >
                  {item}
                </a>
              ))}

              <Button className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-4 text-lg font-bold text-white">
                Junte-se a nós
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
