const SocialItem = ({
  imageUrl,
  name,
  description,
}: {
  imageUrl: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="flex items-center text-white font-drone">
      <img src={imageUrl} alt="social.png" />
      <div>
        <p className="text-xs font-medium">{name}</p>
        <p className="text-4xl font-bold">{description}</p>
      </div>
    </div>
  );
};

export default SocialItem;
