import React from "react";
import PenjelasanTobk from "./Penjelasanfasilitas";
import Alasan from "./Alasan";
import Sistem from "./Sistem";
import Tanggalcaradaftar from "./Tanggalcaradaftar";
import Navbar from "./Navbar";
import Hero2 from "./Hero2";
import Directory from "@/baseDirectory";

const TobkNasional = () => {
  return (
    <div className="relative">
      {/* <img
        className="hidden md:block md:absolute md:top-[990px]  lg:bottom-44 -left-15 -z-50 w-40"
        src={`/${Directory}/bg2.png`}
        alt="background"
      />
      <img
        className="hidden md:block absolute  bottom-[750px] right-0 -z-50 w-40"
        src={`/${Directory}/bg3.png`}
        alt="background"
      /> */}
      <Navbar />

      <Hero2 />
      {/* <PenjelasanTobk />
      <Sistem />
      <Alasan />
      <Tanggalcaradaftar /> */}
    </div>
  );
};

export default TobkNasional;
