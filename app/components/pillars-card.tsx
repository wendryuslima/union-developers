interface PillarsCardProps {
  title: string;
  description: string;
}

const PillarsCard = ({ title, description }: PillarsCardProps) => {
  return (
    <div className="flex w-[350px] flex-col items-center justify-center rounded-lg bg-[#1F1D2B] px-4 pb-6 shadow-lg">
      <h2 className="mb-4 mt-2 w-[350px] items-center justify-center rounded-t-lg bg-gradient-to-r from-purple-600 to-blue-800 p-3 text-center text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-4 max-w-md text-center text-white">{description}</p>
    </div>
  );
};

export default PillarsCard;
