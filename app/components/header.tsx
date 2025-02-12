"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/app/components/ui/sheet";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#sobre, #pilares, #benefícios, #etapas, #depoimentos, #duvidas",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between space-x-4 bg-[#121119] px-5 py-5 lg:h-[100px] lg:justify-center">
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
            href={`#${item.toLowerCase()}`}
            className={`borber-solid border-b-blue-500 text-sm font-semibold transition-colors duration-300 lg:text-base ${
              activeSection === item.toLowerCase()
                ? "bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent"
                : "text-white"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="ml-4 hidden lg:block">
        <Button className="hover:blue-l-blue-800 relative w-[220px] overflow-hidden rounded-md border-transparent bg-gradient-to-r from-purple-900 to-blue-600 px-5 py-5 text-sm font-bold text-white transition-all duration-300 before:absolute before:inset-0 before:w-0 before:bg-[#121119] before:transition-all before:duration-300 hover:border-2 hover:border-b-blue-800 hover:border-r-purple-900 hover:border-t-purple-700 hover:before:w-full">
          <a href="#time" className="relative z-10">
            Junte-se a nós
          </a>
        </Button>
      </div>

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
                  className={`text-sm font-semibold transition-colors duration-300 hover:bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] hover:bg-clip-text hover:text-transparent ${
                    activeSection === item.toLowerCase()
                      ? "bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent"
                      : "text-white"
                  }`}
                  href={`#${item.toLowerCase()}`}
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
