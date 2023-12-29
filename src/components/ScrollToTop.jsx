import { useState, useEffect } from "react";
import top from "../assets/images/top-button.svg";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      id="topbutton"
      className={`scroll ${isVisible ? "visible" : ""}`}
    >
      <img
        className="vector-icon5"
        alt=""
        src={top}
        style={{ width: "44px", height: "44px" }}
      />
    </button>
  );
};

export default ScrollToTopButton;
