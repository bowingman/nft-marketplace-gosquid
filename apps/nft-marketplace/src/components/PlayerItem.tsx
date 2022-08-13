const PlayerItem = ({
  id,
  player,
  winnings,
  borderColor,
  avatarUrl,
}: {
  id: number;
  player: string;
  winnings: string;
  borderColor: string;
  avatarUrl: string;
}) => {
  return (
    <div
      className={`rounded-md flex border-2 border-[${borderColor}] justify-between items-center mx-[80px] my-[15px] text-white`}
    >
      <div className="leading-6 font-medium font-inter text-base mx-[60px] my-[28px]">
        {id}
      </div>
      <div className="flex items-center">
        <img src={`${avatarUrl}`} alt="avatar" />
        <div className="leading-6 font-medium font-inter text-base pl-2">
          {player}
        </div>
      </div>
      <div className="leading-6 font-medium font-inter text-base mx-[60px] my-[28px] flex">
        <img
          src="/assets/images/dollar.png"
          alt="dollar"
          className="w-[24px]"
        />
        &nbsp;{winnings}
      </div>
    </div>
  );
};

export default PlayerItem;
