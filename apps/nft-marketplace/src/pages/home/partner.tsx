import PartnerItem from '../../components/card/PartnerItem';

const Partner = () => {
  return (
    <div className="bg-[url('/assets/images/communitybg.png')] w-full h-[210px] flex items-center justify-center">
      <div className="max-w-[1677px] flex w-full justify-between">
        <PartnerItem imageUrl={'/assets/images/Frame (1).png'} />
        <PartnerItem imageUrl={'/assets/images/CoinMarketCapp.png'} />
        <PartnerItem imageUrl={'/assets/images/Pancake swap.png'} />
        <PartnerItem imageUrl={'/assets/images/image 10.png'} />
        <PartnerItem imageUrl={'/assets/images/Frame.png'} />
        <PartnerItem imageUrl={'/assets/images/Eth.png'} />
      </div>
    </div>
  );
};

export default Partner;
