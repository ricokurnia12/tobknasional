import Image from 'next/image';
import React from 'react';
import Style from './style.module.css';
import Gokre from '../../assets/gokrehero.png';
import { MdDateRange } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Button } from './Button';

const Hero = () => {
  return (
    <header className="relative font-rubik min-h-[750px]  text-white  relative  bg-[url('../assets/bgheromob.png')] md:bg-[url('../assets/dekstop2.png')]  2xl:bg-[url('../assets/dekstop3.png')]   w-full bg-no-repeat flex  justify-between md:justify-center 2xl:px-36 sm:px-8 px-3 pt-7 lg:bg-left-top">
      <div className=" mt-16 lg:mt-28 xl:mt-28 lg:w-[50%] sm:mt-12 md:mt-16 lg:me-32">
        <h1 className="text-2xl sm:mt-8 lg:-mt-10 md:text-4xl 2xl:mt-1 2xl:text-6xl font-bold mb-2 leading-tight md:mb-4">
          TOBK Nasional 2023
          <br /> Pengenalan Soal SNBT
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          Ayo ikuti TOBK Nasional bersama Ganesha Operation,
          <br className="sm:hide" /> dan dapatkan berbagai manfaat dan
          fasilitasnya.
        </p>
        <div className="text-sm md:text-lg font-bold">
          <div className="flex mb-4 items-center">
            <MdDateRange size={32} className="me-4 " />
            <span>28 Juli - 30 Juli 2023</span>
          </div>
          <div className="flex items-center mb-4">
            <BsFillPeopleFill size={32} className="me-4" />
            <span>
              Untuk Kelas 10,11 dan 12 <br className="sm:hidden" />
              SMA/SMK/MA
            </span>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row justify-start">
          <div className="mb-3 me-4 bg-white text-fontprimary font-bold text-xs rounded-md relative w-52 px-4 py-2">
            <AiFillCheckCircle className=" text-xl absolute -top-2 -left-2 bg-white rounded-full text-green-500 " />
            Penilaian menggunakan Item Response Theory (IRT)
          </div>
          <div className="mb-3 me-4 bg-white text-fontprimary font-bold text-xs rounded-md relative w-52 px-4 py-2">
            <AiFillCheckCircle className="text-xl absolute -top-2 -left-2 bg-white rounded-full text-green-500 " />
            Jumlah peserta minimal 10.000
          </div>
          <div className="mb-3 me-4 bg-white text-fontprimary font-bold text-xs rounded-md relative w-52 px-4 py-2">
            <AiFillCheckCircle className="text-xl absolute -top-2 -left-2 bg-white rounded-full text-green-500 " />
            Jumlah peserta minimal 10.000
          </div>
        </div>
        <Image
          src={Gokre}
          alt="TOBK NASIONAL GANESHA OPERATION"
          className={`${Style.bouncingelement} absolute top-96 sm:top-40 right-0 md:hidden w-24 xs:w-40  sm:w-72`}
        />
        <Button>Daftar Sekarang</Button>
      </div>
      <div>
        <Image
          src={Gokre}
          alt="TOBK NASIONAL GANESHA OPERATION"
          className={`sm:w-96 2xl:w-full mt-20 2xl:mt-16 hidden md:block md:absolute right-0 top-0 md:w-48 lg:static ${Style.bouncingelement}`}
        />
      </div>
    </header>
  );
};

export default Hero;
