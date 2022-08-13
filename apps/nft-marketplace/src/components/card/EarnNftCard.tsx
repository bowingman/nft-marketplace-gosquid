export type EarnNftCardProps = {
  backImage: string;
  characterImage: string;
  title: string;
  description: string;
};

const EarnNftCard = ({
  backImage,
  characterImage,
  title,
  description,
}: EarnNftCardProps) => {
  return (
    <div>
      <div className="flex justify-center items-center relative">
        <img src={backImage} alt="background earn nftImage" />
        <img
          src={characterImage}
          alt="character earn nftImage"
          className="absolute h-[140%]"
        />
      </div>
      <div className="py-[90px]">
        <h4 className="title-20-text text-center">{title}</h4>
        <p className="header-16-medium-text text-[#89888B] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EarnNftCard;
