const PartnerItem = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="px-4">
      <img src={`${imageUrl}`} alt="image1.png" />
    </div>
  );
};

export default PartnerItem;
