import React from 'react';
import Image from 'next/image';
import Hero from './Hero';
import PenjelasanTobk from './Penjelasanfasilitas';
import bg2 from '../../assets/bg2.png';
import Alasan from './Alasan';
import Sistem from './Sistem';
import Tanggalcaradaftar from './Tanggalcaradaftar';
import Navbar from './Navbar';

const TobkNasional = () => {
  return (
    <div className="relative">
      {/* <Image
        className="md:absolute md:top-[990px]  lg:bottom-44 -left-15 -z-50 w-28"
        src={bg2}
      /> */}
      <Navbar />
      <Hero />
      <PenjelasanTobk />
      <Sistem />
      <Alasan />
      <Tanggalcaradaftar />
    </div>
  );
};

export default TobkNasional;
