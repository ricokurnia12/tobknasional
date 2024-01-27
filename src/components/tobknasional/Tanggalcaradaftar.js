import React from "react";
import { MdDateRange } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Button } from "./Button";
import Directory from "@/baseDirectory";

const Tanggalcaradaftar = () => {
  return (
    <div className=" mx-auto  max-w-7xl px-4 md:px-12 mb-12 lg:px-28 2xl:px-0 md:mb-36 xl:-mt-40">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start">
          <img
            className="w-32 md:w-52 lg:w-96 me-0"
            src={`/${Directory}/gokrehero.png`}
            alt="GO KREASI"
          />
          <div>
            <div className="text-primary mb-4">
              <div>
                <MdDateRange className="text-4xl lg:text-6xl me-2 inline self-center" />
                <b className="lg:text-2xl">Tanggal Pendaftaran</b>
              </div>
              <div className=" flex mt-2">
                {/* <MdDateRange className="text-4xl lg:text-6xl me-2 inline self-center" /> */}
                <div className=" text-sm self-center inline lg:text-xl 2xl:text-2xl">
                  29 Janurari - 27 Februari 2024
                  <br />
                </div>
              </div>
            </div>
            <div className="text-primary ">
              <div className="">
                <MdDateRange className="text-4xl lg:text-6xl me-2 inline" />
                <b className="lg:text-2xl">Tanggal Pelaksanaan</b>
              </div>
              <div className=" flex  mt-2">
                {/* <MdDateRange className="text-4xl lg:text-6xl me-2 self-center" /> */}
                <div className="self-center text-sm lg:text-xl 2xl:text-2xl">
                  4 - 10 Maret 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
