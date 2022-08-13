import NewArrivalItem from '../../components/card/NewArrivalItem';

const NewArrival = () => {
  return (
    <div className="relative w-[100%] h-[275px]">
      <div className="absolute w-[100%] h-[300px] left-0 top-[-25px] bg-[url('/assets/images/yellowbg.png')] text-center">
        <div className="container m-auto flex items-center justify-between">
          <div>
            <img
              src="/assets/images/NewArribal.png"
              alt="New Arrival.png"
              className="w-full"
            />
          </div>
          <NewArrivalItem
            title={'THE DJ'}
            imageUrl={'/assets/images/person_1.png'}
          />
          <NewArrivalItem
            title={'ASSASIN'}
            imageUrl={'/assets/images/person_2.png'}
          />
          <NewArrivalItem
            title={'LEON GUY'}
            imageUrl={'/assets/images/person_3.png'}
          />
          <NewArrivalItem
            title={'MAFIA ENGLAND'}
            imageUrl={'/assets/images/person_4.png'}
          />
          <NewArrivalItem
            title={'BASKETBALL GIRL'}
            imageUrl={'/assets/images/person_5.png'}
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
