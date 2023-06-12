import React from 'react';
import Image from 'next/image';
// import Hero from './Hero';
import PenjelasanTobk from './Penjelasanfasilitas';
import bg2 from '../../assets/bg2.png';
import bg3 from '../../assets/bg3.png';
import Alasan from './Alasan';
import Sistem from './Sistem';
import Tanggalcaradaftar from './Tanggalcaradaftar';
import Navbar from './Navbar';
import Footer from '../Footer';
import Hero2 from './Hero2';

const TobkNasional = () => {
  return (
    <div className="relative">
      <Image
        className="hidden md:block md:absolute md:top-[990px]  lg:bottom-44 -left-15 -z-50 w-40"
        src={bg2}
        alt="background"
      />
      <Image
        className="hidden md:block absolute  bottom-[750px] right-0 -z-50 w-40"
        src={bg3}
        alt="background"
      />
      <Navbar />
      {/* <Hero /> */}
      <Hero2 />
      <PenjelasanTobk />
      <Sistem />
      <Alasan />
      <Tanggalcaradaftar />
    </div>
  );
};

export default TobkNasional;
