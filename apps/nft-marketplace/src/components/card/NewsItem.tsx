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
        className={`font-bold text-[20px] leading-6 absolute ml-[24px] pr-[52px] top-[544px]`}
      >
        {description}
      </p>
      <div className="ml-[24px] absolute top-[612px] bg-[#FBC625] w-[322px] h-[1px]" />
      <div className="text-[14px] font-medium leading-6 flex ml-[24px] absolute top-[634px] items-center">
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
        className={`font-bold text-[20px] leading-6 absolute ml-[24px] pr-[52px] top-[208px]`}
      >
        {description}
      </p>
      <div className="ml-[24px] absolute top-[252px] bg-[#FBC625] w-[322px] h-[1px]" />
      <div className="text-[14px] font-medium leading-6 flex ml-[24px] absolute top-[274px] items-center">
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
        className={`font-bold text-[20px] leading-6 absolute ml-[24px] pr-[52px] top-[${
          model === 'row' ? '544px' : model === 'col' ? '208px' : '184px'
        }]`}
      >
        {description}
      </p>
      <div className="ml-[24px] absolute top-[252px] bg-[#FBC625] w-[322px] h-[1px]" />
      <div className="text-[14px] font-medium leading-6 flex ml-[24px] absolute top-[274px] items-center">
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
