import React from 'react';
import { BsFillPeopleFill, BsBookHalf } from 'react-icons/bs';

const Card = () => {
  return (
    <div className="bg-slate-50 w-64 h-56 px-4 py-2 rounded-lg shadow-lg mx-auto border">
      <div className="flex items-center text-primary font-bold">
        <BsBookHalf size={20} className="me-2" />
        Penilaian Try Out
      </div>
      <div className="w-4/5 h-[0.1px] bg-red-500 mt-2 mb-2"></div>

      <div className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        voluptate eos eligendi porro accusantium facere deleniti natus
        architecto sit aliquid.
      </div>
    </div>
  );
};

export default Card;
