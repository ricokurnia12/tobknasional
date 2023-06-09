import Image from 'next/image';
import React from 'react';
import Style from './style.module.css';
import Gokre from '../../assets/gokrehero.png';
import { MdDateRange } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <header className="mb-20 relative font-rubik h-screen min-h-[750px] sm:min-h-[900px] lg:min-h-[800px]  text-white  relative  bg-[url('../assets/bgheromob.png')] sm:bg-[url('../assets/svg.png')]   w-full bg-no-repeat flex items-center sm:items-start  lg:items-center justify-center 2xl:px-36 px-2 pt-7">
      <div className="w-4/5 -mt-52 lg:-mt-36 lg:w-[50%] sm:mt-12 md:mt-16 lg:me-32">
        <h1 className="text-2xl lg:-mt-16 md:text-5xl 2xl:text-6xl font-bold mb-2 leading-tight md:mb-8">
          TOBK Nasional
          <br /> Pengenalan Soal SNBT
        </h1>
        <p className="text-lg md:text-2xl 2xl:text-2xl mb-8">
          Ayo ikuti TOBK Nasional bersama Ganesha Operation, dan
          dapatkan berbagai manfaat dan fasilitasnya.
        </p>
        <div className="text-sm md:text-lg font-bold">
          <div className="flex mb-4 items-center">
            <MdDateRange size={32} className="me-4 " />
            <span>28 Juli - 30 Juli 2023</span>
          </div>
          <div className="flex items-center">
            <BsFillPeopleFill size={32} className="me-4" />
            <span>
              Untuk SMA, SMK <br />
              Kelas 10-12 dan Gap Year
            </span>
          </div>
        </div>
        <Image
          src={Gokre}
          alt="TOBK NASIONAL GANESHA OPERATION"
          className={`${Style.bouncingelement} absolute sm:top-40 right-0 md:hidden w-40 sm:w-72`}
        />
        <button className="text-sm lg:text-lg  bg-secondary hover:bg-yellow-500 active:scale-95 text-[#242424] font-bold py-2 px-4 rounded-xl mt-8">
          Daftar Sekarang
        </button>
      </div>
      <div>
        <Image
          src={Gokre}
          alt="TOBK NASIONAL GANESHA OPERATION"
          className={`sm:w-96 2xl:w-full hidden md:block ${Style.bouncingelement}`}
        />
      </div>
    </header>
  );
};

export default Hero;
