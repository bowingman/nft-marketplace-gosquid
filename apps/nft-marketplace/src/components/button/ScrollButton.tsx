const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth',
    });
  };

  return (
    <div className="absolute left-[50%] bottom-[92px]">
      <button onClick={scrollToTop} className="font-bold text-base font-inter">
        Scroll down
      </button>
      <div className="flex justify-center mt-[16px]">
        <img src="/assets/images/vector.png" alt="vector.png"></img>
      </div>
    </div>
  );
};

export default ScrollButton;
