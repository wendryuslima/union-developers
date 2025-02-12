import Image from "next/image";
import benefitsOptins from "../constants/benefits";

const BenefitsItem = () => {
  return (
    <div className="max-full mx-auto flex flex-col items-center justify-center gap-24 p-6">
      {benefitsOptins.map((option, index) => (
        <div
          key={option.title}
          className={`flex w-full max-w-5xl flex-col items-center text-center lg:w-3/4 lg:flex-row lg:items-center lg:gap-12 ${
            index % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Imagem */}
          <div className="flex-shrink-0 lg:w-1/3">
            <Image
              className="mx-auto mb-6 lg:mb-0 lg:w-full lg:max-w-[200px]"
              width={150}
              height={150}
              src={option.imageUrl}
              alt="Ícone do benefício"
            />
          </div>

          {/* Texto */}
          <div className="lg:w-2/3 lg:text-left">
            <h1 className="mb-4 text-2xl font-extrabold text-white lg:text-5xl">
              {option.title}
            </h1>
            <p className="text-lg leading-relaxed text-gray-300 lg:text-2xl">
              {option.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsItem;
