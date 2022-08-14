const PlayItem = ({
  bgColor,
  number,
  numberColor,
  contentColor,
}: {
  bgColor: string;
  number: number;
  numberColor: string;
  contentColor: string;
}) => {
  return (
    <div className={`flex items-center bg-[${bgColor}]`}>
      <div
        className={`flex items-center justify-center font-drone text-4xl ${numberColor} w-[10rem]`}
      >
        {number}
      </div>
      <div
        className={`mt-3 font-inter text-[${contentColor}] text-[16px] leading-6 width-8/10 font-medium`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laborisfds.
      </div>
    </div>
  );
};

export default PlayItem;
