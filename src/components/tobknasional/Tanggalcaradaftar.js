import React from "react";
import { MdDateRange } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Button } from "./Button";
import Directory from "@/baseDirectory";

const Tanggalcaradaftar = () => {
  return (
    <div className=" mx-auto  max-w-7xl px-4 md:px-12 mb-12 lg:px-28 2xl:px-0 md:mb-36 ">
      {/* Yotube video */}

      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className=" text-xl lg:text-4xl  font-bold text-center px-3 mb-2 md:mb-12">
          Apa Kata Mereka Tentang Soal-soal UTBK-SNBT 2023
        </h1>

        <iframe
          className=" aspect-video w-full max-w-4xl shadow-xl rounded-xl border border-fontprimary  "
          src="https://www.youtube.com/embed/95V7THWcanM?rel=0"
          title="SOAL UTBK-SNBT MIRIP GO!!!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Tanggalcaradaftar;
