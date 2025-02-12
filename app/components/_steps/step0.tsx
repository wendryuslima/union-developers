import { Button } from "../ui/button";

interface Step0Props {
  setSubscribe: () => void;
}

const Step0 = ({ setSubscribe }: Step0Props) => {
  return (
    <div
      id="time"
      className="w-50 mt-4 items-center justify-center gap-4 space-y-4 rounded-lg p-6 text-white lg:m-auto lg:p-10"
    >
      <h2 className="text-center text-xl font-bold lg:text-3xl">
        Junte-se ao time!
      </h2>
      <p className="mt-2 text-center text-sm lg:text-base">
        Tem interesse em participar do Union? Confira abaixo os requisitos para
        participar.
      </p>
      <ul className="mt-4 space-y-6 text-sm lg:text-lg">
        <li>
          <span className="bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent">
            ✔
          </span>{" "}
          Ter mais que 18 anos
        </li>
        <li>
          <span className="mr-4 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent">
            ✔
          </span>{" "}
          Ter 1 ano ou mais de estudo em programação
        </li>
        <li>
          <span className="bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent">
            ✔
          </span>{" "}
          Ainda não trabalhar na área
        </li>
        <li>
          <span className="bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent">
            ✔
          </span>{" "}
          Já ter criado projetos sozinho que não sejam de cursos ou eventos
        </li>
        <li>
          <span className="bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent">
            ✔
          </span>{" "}
          Não participar de bootcamps ou programas de capacitação
        </li>
        <li>
          <span className="bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent">
            ✔
          </span>{" "}
          Ter disponibilidade para trabalhar no mínimo 1 hora por dia no projeto
        </li>
        <li>
          <span className="bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent">
            ✔
          </span>{" "}
          Ter disponibilidade para participar das reuniões do time, durante a
          semana e finais de semana
        </li>
      </ul>
      <div className="mt-4">
        <Button
          onClick={() => setSubscribe()}
          className="hover:blue-l-blue-800 relative w-full overflow-hidden rounded-md border-transparent bg-gradient-to-r from-purple-900 to-blue-600 px-6 py-6 text-sm font-bold text-white transition-all duration-300 before:absolute before:inset-0 before:w-0 before:bg-[#121119] before:transition-all before:duration-300 hover:border-2 hover:border-b-blue-800 hover:border-r-purple-900 hover:border-t-purple-700 hover:before:w-full"
        >
          <a className="relative z-10">Inscreva-se</a>
        </Button>
      </div>
    </div>
  );
};

export default Step0;
