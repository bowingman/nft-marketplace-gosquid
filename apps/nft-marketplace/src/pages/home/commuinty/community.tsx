interface PROPS {
  Icon: JSX.Element;
  title: string;
  name: string;
}

const Community = ({ Icon, title, name }: PROPS) => {
  return (
    <div className="relative">
      {Icon}
      <div className="absolute left-[120px] top-[54px]">
        <p className="caption-12-medium-text">{title}</p>
        <p className="title-36-text mt-[6px]">{name}</p>
      </div>
    </div>
  );
};

export default Community;
