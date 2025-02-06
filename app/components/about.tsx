

const About = () => {
  return (
    <div className="relative mt-10 w-full max-w-lg mx-auto p-6">
      <div className="relative text-white p-6 -z-20 rounded-xl border-2 border-purple-500">
        <h2 className="absolute -top-5 left-4 px-3 text-lg font-semibold bg-[#1F1D2B] z-20">
          Quem somos?
        </h2>
        <p className="mt-4 text-center">
          O Union é uma oportunidade única para desenvolvedores juniors, nossa
          missão é proporcionar a você um ambiente prático e imersivo,
          semelhante ao que você encontrará no mercado. Aqui, você vai vivenciar
          como é o dia a dia de um desenvolvedor de software, trabalhando lado a
          lado com líderes experientes e outros talentosos desenvolvedores que
          estão no mesmo caminho que você.
        </p>
        <p className="mt-4 text-center">
          No Union, você não apenas ganhará experiência, mas também estará
          pronto para enfrentar as demandas do mercado de tecnologia. Nossa
          abordagem holística enfatiza não apenas o conhecimento técnico, mas
          também habilidades interpessoais e práticas.
        </p>
      </div>

      <div className="relative flex flex-col items-center text-center ">
        <div className="relative flex items-center justify-center w-full max-w-md">
          <div className="absolute w-1 h-9 bg-gradient-to-b from-purple-700 to-blue-500 top-0"></div>
          <div className="w-1/3 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
          <h2 className="font-semibold mt-12 text-2xl text-transparent bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text">
            Pilares
          </h2>
          <div className="w-1/3 h-0.5 bg-gradient-to-l from-blue-500 to-transparent"></div>
        </div>

        <p className="max-w-md text-white mt-3">
          Os pilares que sustentam o formato inovador de aprendizagem do Union é
          a junção de incríveis metodologias!
        </p>
      </div>

      
    </div>
  );
};

export default About;
