const MenuItem = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-row items-start p-0 gap-[10px] ${className}`}>
      <p className="font-drone font-bold text-sm leading-5 flex items-center text-center text-white hover:cursor-pointer">
        {name}
      </p>
    </div>
  );
};

export default MenuItem;
