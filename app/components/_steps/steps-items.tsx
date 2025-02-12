interface StepsItemsProps {
  number: string;
  title: string;
  description: string;
}

const StepsItems = ({ number, title, description }: StepsItemsProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-gray-900 p-6 shadow-[0px_0px_30px_rgba(0,72,254,0.4)] lg:h-[300px] lg:w-[340px] lg:p-8">
      <div className="">
        <h1 className="bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-7xl font-semibold text-transparent lg:text-[6rem]">
          {number}
        </h1>
      </div>

      <div className="flex flex-col items-center text-center text-white lg:w-[220px]">
        <h1 className="text-lg font-bold text-white lg:text-2xl">{title}</h1>
        <p className="mt-2 px-4 text-center lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default StepsItems;
