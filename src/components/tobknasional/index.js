import React from 'react';
import Image from 'next/image';
import Hero from './Hero';
import PenjelasanTobk from './Penjelasanfasilitas';
import bg2 from '../../assets/bg2.png';
import bg3 from '../../assets/bg3.png';
import Alasan from './Alasan';
import Sistem from './Sistem';
import Tanggalcaradaftar from './Tanggalcaradaftar';
import Navbar from './Navbar';
import Footer from '../Footer';

const TobkNasional = () => {
  return (
    <div className="relative w">
      <Image
        className="hidden md:block md:absolute md:top-[990px]  lg:bottom-44 -left-15 -z-50 w-40"
        src={bg2}
      />
      <Image
        className="hidden md:block absolute  bottom-[750px] right-0 -z-50 w-40"
        src={bg3}
      />
      <Navbar />
      <Hero />
      <PenjelasanTobk />
      <Sistem />
      <Alasan />
      <Tanggalcaradaftar />
      {/* <Footer /> */}
    </div>
  );
};

export default TobkNasional;
