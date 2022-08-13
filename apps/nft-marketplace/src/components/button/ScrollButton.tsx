const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth',
    });
  };

  return <button onClick={scrollToTop}>Scroll down</button>;
};

export default ScrollButton;
