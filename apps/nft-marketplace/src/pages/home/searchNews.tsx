import SubTitle from '../../components/subTitle/SubTitle';
import NewsItem from '../../components/card/NewsItem';

const SearchNews = () => {
  return (
    <div className="mx-[160px]">
      <div className="flex items-center flex-col">
        <SubTitle title="SEARCH THE NEWS"></SubTitle>
        <div className="grid gap-[41px] xl:grid-cols-4 xl:grid-rows-2 lg:grid-cols-2 lg:grid-rows-4 mt-[84px]">
          <div className="row-span-2 xl:order-1 md:order-1">
            <NewsItem
              imageUrl="/assets/images/news3.png"
              description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
              view_count={123456}
              comment_count={2408}
              model="row"
            />
          </div>
          <div className="col-span-1 xl:order-2 md:order-2">
            <NewsItem
              imageUrl="/assets/images/news1.png"
              description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
              view_count={123456}
              comment_count={2408}
            />
          </div>
          <div className="col-span-1 xl:order-3 md:order-3">
            <NewsItem
              imageUrl="/assets/images/news5.png"
              description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
              view_count={123456}
              comment_count={2408}
            />
          </div>
          <div className="col-span-1 xl:order-4 md:order-4">
            <NewsItem
              imageUrl="/assets/images/news2.png"
              description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
              view_count={123456}
              comment_count={2408}
            />
          </div>
          <div className="col-span-2 xl:order-5 md:order-6">
            <NewsItem
              imageUrl="/assets/images/news6.png"
              description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
              view_count={123456}
              comment_count={2408}
              model="col"
            />
          </div>
          <div className="col-span-1 xl:order-6 md:order-5">
            <NewsItem
              imageUrl="/assets/images/news4.png"
              description="LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT."
              view_count={123456}
              comment_count={2408}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNews;
