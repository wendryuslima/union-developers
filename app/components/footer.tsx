import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <>
      <div className="mx-auto mt-2 flex w-[450px] items-center gap-6 space-y-4 bg-black p-6 px-4 lg:w-[1400px] lg:flex-row lg:justify-between">
        <div className="mt-4 flex flex-col items-center gap-4 text-center text-sm">
          <Image
            src="/logo-union-developers.svg"
            alt="logo"
            width={150}
            height={150}
          />
          <p className="lg:w-[300px]">
            O Union proporciona experiência para desenvolvedores juniors,
            transformando-os em profissionais preparados para o mercado.
          </p>
        </div>

        <div className="mt-4 flex gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-white">Saiba mais</h1>
            <p>Sobre</p>
            <p>Depoismentos</p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-white">Dúvidas</h1>
            <p>FAQ</p>
            <p>Como funciona</p>
          </div>
        </div>

        <div className="mt-7 flex flex-row gap-1 pb-4 lg:flex-col lg:gap-6 lg:px-6">
          <Button className="flex flex-col" variant="ghost">
            <Mail />
            Email
          </Button>

          <Button className="flex flex-col" variant="ghost">
            <Linkedin />
            Linkedin
          </Button>

          <Button className="flex flex-col" variant="ghost">
            <Github />
            Github
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-3 flex items-center justify-center text-center text-sm">
        <p>© Union Developers - 2025</p>
      </div>
    </>
  );
};

export default Footer;
