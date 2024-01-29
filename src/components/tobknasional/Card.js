import React from "react";
import { BsBookHalf } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="bg-slate-50 w-60 h-52 px-4 py-2 rounded-lg shadow-lg mx-auto border">
      <div className="flex items-center text-primary font-bold">
        {props.icon}
        {props.title}
      </div>
      <div className="w-full h-[0.1px] bg-red-500 mt-2 mb-2"></div>

      <div className="text-justify">{props.detail}</div>
    </div>
  );
};

export default Card;
