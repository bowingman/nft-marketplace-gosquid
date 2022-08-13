import ReactSm from '../../assets/images/rect-sm.svg';
export type SubTitleProps = {
  title: string;
  description?: string;
};

const SubTitle = ({ title, description }: SubTitleProps) => {
  return (
    <div className="mt-[120px] w-full md:w-1/2">
      <h1 className="title-40-text text-center text-yellow">{title}</h1>
      {!!description ? (
        <p className="header-16-medium-text text-center">{description}</p>
      ) : (
        ''
      )}
      <div className="flex justify-center mt-[24px]">
        <div className="w-[240px] h-[2px] bg-white"></div>
      </div>
      <div className="flex justify-center">
        <img src={ReactSm} alt="" />
      </div>
    </div>
  );
};

export default SubTitle;
