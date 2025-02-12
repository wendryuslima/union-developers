interface StepsItemsProps {
  number: string;
  title: string;
  description: string;
}

const StepsItems = ({ number, title, description }: StepsItemsProps) => {
  return (
    <div className="relative flex h-[240px] w-[280px] flex-col items-center justify-center rounded-lg bg-gray-900 p-6 shadow-[0px_0px_30px_rgba(0,72,254,0.4)] lg:h-[300px] lg:w-[340px] lg:p-8">
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <h1 className="relative right-11 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-9xl font-semibold text-transparent lg:text-[10rem]">
          {number}
        </h1>
      </div>

      <div className="flex w-[180px] flex-col items-center text-center text-white lg:w-[220px]">
        <h1 className="text-lg font-bold text-white lg:text-2xl">{title}</h1>
        <p className="mt-2 px-4 text-center lg:text-lg">{description}</p>
      </div>

      <div className="lg:hidden">
        <div className="absolute bottom-[-36px] h-9 w-1 bg-gradient-to-b from-purple-700 to-blue-500"></div>
      </div>
    </div>
  );
};

export default StepsItems;
