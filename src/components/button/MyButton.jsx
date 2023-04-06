import React, { useState, useEffect } from "react";
import './MyButton.css';
import { IoIosArrowUp } from 'react-icons/io';



function MyButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      {showButton && (
        <button className="button-top" id="myBtn" onClick={handleClick}>
          <IoIosArrowUp/>
        </button>
      )}
    </div>
  );
}

export default MyButton;
