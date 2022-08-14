const renderRow = ({
  imageUrl,
  description,
  view_count,
  comment_count,
}: {
  imageUrl: string;
  description: string;
  view_count: number;
  comment_count: number;
}) => {
  return (
    <div className="relative font-drone">
      <img src={imageUrl} alt="newsImage.png"></img>
      <p
        className={`font-bold 2xl:text-[20px] xl:text-[16px] lg:text-[20px] leading-6 absolute ml-[24px] pr-[52px] bottom-[12.94%]`}
      >
        {description}
      </p>
      <div className="ml-[6.47%] absolute bottom-[10%] bg-[#FBC625] w-[87%] h-[1px]" />
      <div className="text-[14px] font-medium leading-6 flex ml-[24px] absolute bottom-[3.53%] items-center">
        <div className="flex items-center">
          <img
            src="/assets/images/eye.png"
            alt="eye.png"
            className="w-[16px] h-[10px]"
          />
          <div className="pt-1">&nbsp;{view_count}</div>
        </div>
        <div className="pl-[40px] flex items-center">
          <img
            src="/assets/images/comment.png"
            alt="eye.png"
            className="w-[16px] h-[10px]"
          />
          <div className="pt-1">&nbsp;{comment_count}</div>
        </div>
      </div>
    </div>
  );
};

const renderCol = ({
  imageUrl,
  description,
  view_count,
  comment_count,
}: {
  imageUrl: string;
  description: string;
  view_count: number;
  comment_count: number;
}) => {
  return (
    <div className="relative font-drone">
      <img src={imageUrl} alt="newsImage.png"></img>
      <p
        className={`font-bold 2xl:text-[20px] xl:text-[16px] lg:text-[20px] leading-6 absolute ml-[24px] pr-[52px] bottom-[27.5%]`}
      >
        {description}
      </p>
      <div className="w-[87%] absolute bg-[#FBC625] h-[1px] bottom-[21.25%] left-[3.87%]" />
      <div className="text-[14px] font-medium leading-6 flex ml-[24px] absolute items-center bottom-[7.5%]">
        <div className="flex items-center">
          <img
            src="/assets/images/eye.png"
            alt="eye.png"
            className="w-[16px] h-[10px]"
          />
          <div className="pt-1">&nbsp;{view_count}</div>
        </div>
        <div className="pl-[40px] flex items-center">
          <img
            src="/assets/images/comment.png"
            alt="eye.png"
            className="w-[16px] h-[10px]"
          />
          <div className="pt-1">&nbsp;{comment_count}</div>
        </div>
      </div>
    </div>
  );
};

const NewsItem = ({
  imageUrl,
  description,
  view_count,
  comment_count,
  model,
}: {
  imageUrl: string;
  description: string;
  view_count: number;
  comment_count: number;
  model?: string;
}) => {
  return model === 'row' ? (
    renderRow({ imageUrl, description, view_count, comment_count })
  ) : model === 'col' ? (
    renderCol({ imageUrl, description, view_count, comment_count })
  ) : (
    <div className="relative font-drone">
      <img src={imageUrl} alt="newsImage.png"></img>
      <p
        className={`font-bold 2xl:text-[20px] xl:text-[16px] lg:text-[20px] leading-6 absolute ml-[24px] pr-[52px] bottom-[27.5%]`}
      >
        {description}
      </p>
      <div className="w-[87%] absolute top-[78.75%] bg-[#FBC625] h-[1px] ml-[6.5%]" />
      <div className="text-[14px] font-medium leading-6 flex ml-[24px] absolute top-[85%] items-center">
        <div className="flex items-center">
          <img
            src="/assets/images/eye.png"
            alt="eye.png"
            className="w-[16px] h-[10px]"
          />
          <div className="pt-1">&nbsp;{view_count}</div>
        </div>
        <div className="pl-[40px] flex items-center">
          <img
            src="/assets/images/comment.png"
            alt="eye.png"
            className="w-[16px] h-[10px]"
          />
          <div className="pt-1">&nbsp;{comment_count}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
