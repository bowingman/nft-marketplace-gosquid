const TokenDistributionComponent = ({
  name,
  progress,
  price,
}: {
  name: string;
  progress: number;
  price: string;
}) => {
  return (
    <div>
      {name}
      {progress}
      {price}
    </div>
  );
};

export default TokenDistributionComponent;
