import Image from "next/image";
import benefitsOptins from "./constants/benefits";

const BenefitsItem = () => {
  return (
    <div className="mx-auto flex max-w-[350px] flex-col items-center justify-center gap-6 p-6">
      {benefitsOptins.map((option) => (
        <div key={option.title} className="text-center">
          <Image
            className="mx-auto mb-4"
            width={100}
            height={100}
            src={option.imageUrl}
            alt="rocket"
          />

          <h1 className="mb-4 text-white font-bold">{option.title}</h1>
          <h1>{option.description}</h1>
        </div>
      ))}
    </div>
  );
};

export default BenefitsItem;
