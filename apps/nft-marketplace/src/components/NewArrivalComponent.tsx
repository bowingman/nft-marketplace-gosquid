const NewArrivalComponent = ({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) => {
  return (
    <div className="flex justify-center m-4 flex-col">
      <div className="mb-[28px] relative">
        <img src={imageUrl} alt="image1.png" className="relative z-10" />
        <div className="arrival_rect absolute bottom-[0px]">
          <img
            src={'/assets/images/image_back.png'}
            alt="back.png"
            className="w-full"
          />
        </div>
      </div>
      <p className="font-drone font-bold text-center text-[18px]">{title}</p>
    </div>
  );
};

export default NewArrivalComponent;
