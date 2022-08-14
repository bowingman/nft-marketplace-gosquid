const IntroItem = ({ amount, name }: { amount: string; name: string }) => {
  return (
    <div>
      <p className="font-drone font-bold text-xl leading-8">${amount}</p>
      <p className="font-inter text-yellow font-medium text-sm pt-2">{name}</p>
    </div>
  );
};

export default IntroItem;
