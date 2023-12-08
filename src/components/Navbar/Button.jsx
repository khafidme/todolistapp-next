import Image from "next/image";
import React from "react";

const Button = ({ value, styleButton, imageButton }) => {
  return (
    <button className={`flex justify-center w-full py-1 rounded-3xl font-bold border ${styleButton}`}>
      <div className="flex  items-center gap-2">
        {imageButton 
        ? imageButton 
        : null
        }
        {value}
      </div>
    </button>
  );
};

export default Button;
