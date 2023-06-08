import Image from 'next/image';
import React from 'react';
import Gokre from '../../assets/gokrehero.png';
import { MdDateRange } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <header className="font-rubik h-screen min-h-[600px] sm:min-h-[900px] lg:min-h-[800px]  text-white  relative  bg-[url('../assets/bghero.svg')] bg-left-top lg:bg-cover  w-full bg-no-repeat flex items-center sm:items-start  lg:items-center justify-center 2xl:px-36 px-8 pt-7">
      <div className="-mt-12 lg:-mt-36 lg:w-[40%] md:mt-16 lg:me-32">
        <h1 className="text-2xl lg:-mt-16 md:text-4xl 2xl:text-6xl font-bold mb-2 leading-tight md:mb-8">
          TOBK Nasional
          <br /> Pengenalan Soal SNBT
        </h1>
        <p className="text-lg md:text-xl 2xl:text-2xl mb-8">
          Ayo ikuti TOBK Nasional bersama Ganesha Operation, dan
          dapatkan berbagai manfaat dan fasilitasnya.
        </p>
        <div className="text-sm md:text-lg font-bold">
          <div className="flex mb-4">
            <MdDateRange size={32} className="me-4 " />
            <span>28 Juli - 30 Juli 2023</span>
          </div>
          <div className="flex">
            <BsFillPeopleFill size={32} className="me-4" />
            <span>Untuk SMA, SMK Kelas 10-12 dan Gap Year</span>
          </div>
        </div>
        <Image
          src={Gokre}
          alt="TOBK NASIONAL GANESHA OPERATION"
          className="w-24 float-right lg:w-96 2xl:w-full"
        />
        <button className="text-sm lg:text-lg  bg-secondary hover:bg-yellow-500 active:scale-95 text-[#242424] font-bold py-2 px-4 rounded-xl mt-8">
          Daftar Sekarang
        </button>
      </div>
      {/* <div>
        <Image
          src={Gokre}
          alt="TOBK NASIONAL GANESHA OPERATION"
          className="lg:w-96 2xl:w-full"
        />
      </div> */}
    </header>
  );
};

export default Hero;
