import React from "react";

const MainButton = ({ children, className, url, target }) => {
  const handleClick = () => {
    if (url) {
      window.open(url, target || "_self");
    }
  };

  return (
    <button
      className={`bg-slate-900 text-white text-2xl px-10 py-6 my-2 rounded-full ${className} 
                  hover:bg-slate-700 hover:text-gray-200 transition-colors duration-300`}
      data-aos="fade-right"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
