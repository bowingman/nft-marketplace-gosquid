export type SubTitleProps = {
  title: string;
  description?: string;
};

const SubTitle = ({ title, description }: SubTitleProps) => {
  console.log(!!description);
  return (
    <div className="flex flex-col items-center w-1/2">
      <h3 className="title-40-text uppercase text-yellow">{title}</h3>
      {!!description ? (
        <p className="header-16-medium-text text-center">{description}</p>
      ) : (
        ''
      )}
      <div className="w-[240px] h-[2px] bg-white mt-[24px]"></div>
      <div className="w-[50px] h-1 bg-white"></div>
    </div>
  );
};

export default SubTitle;
