import React from "react";
import Style from "./style.module.css";
// import { MdDateRange } from "react-icons/md";
// import { BsFillPeopleFill, BsPhone } from "react-icons/bs";
// import { AiFillCheckCircle, AiOutlineFieldTime } from "react-icons/ai";
// import { IoIosPricetag } from "react-icons/io";
import { Button } from "./Button";
import Directory from "@/baseDirectory";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Hero = () => {
  return (
    <header className="relative font-rubik min-h-screen   text-white bg-[url('../assets/bgheromob.png')] sm:bg-[url('../assets/dekstop2.png')]  2xl:bg-[url('../assets/dekstop3.png')]   w-full bg-no-repeat flex  justify-between lg:justify-center 2xl:px-36 sm:px-8 px-3 pt-7 lg:bg-left-top">
      <div className=" mt-16 lg:mt-28 xl:mt-28 lg:w-[50%] sm:mt-12 md:mt-16 lg:me-12">
        <h1 className="text-2xl sm:mt-8 lg:-mt-10 md:text-4xl 2xl:mt-1 2xl:text-4xl font-bold mb-2 leading-tight md:mb-4">
          TOBK Nasional Ganesha Operation Kembali Hadir di November 2024!
          <br />
        </h1>
        <p className="text-lg md:text-xl lg:text-md mb-4">
          Setelah sukses dengan 229.024 peserta pada TOBK Nasional di bulan
          Agustus 2024, kini giliran kamu untuk ikut bergabung merasakan
          pengerjaan soal UTBK-SNBT seperti yang sesungguhnya!
        </p>
        {/* <div className="text-sm md:text-lg font-bold">
          <div className="flex mb-4 items-center">
            <MdDateRange size={32} className="me-4 " />
            <span>4 s.d. 10 Maret 2024</span>
          </div>
          <div className="flex mb-4 items-center">
            <IoIosPricetag size={32} className="me-4 " />
            <span>
              Harga: Rp50.000,- <br />
              <small>
                <sup>*</sup>
                Gratis untuk siswa GO dan tidak perlu melakukan pendaftaran
              </small>
            </span>
          </div>

          <div className="flex items-center mb-4">
            <BsFillPeopleFill size={32} className="me-4" />
            <span>Untuk kelas 12 dan Gap Year</span>
          </div>
          <div className="flex items-center mb-4">
            <BsPhone size={32} className="me-4" />
            <span>
              Pelaksanaan TOBK menggunakan <br className="sm:hidden" />
              GO Expert
            </span>
          </div>
        </div> */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            {" "}
            <IoIosCheckmarkCircle className="text-green-400" size={24} />{" "}
            <p className="text-lg font-semibold">Penilaian Dengan Sistem IRT</p>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <IoIosCheckmarkCircle className="text-green-400" size={24} />{" "}
            <p className="text-lg font-semibold">Jumlah Peserta &gt; 10.000</p>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <IoIosCheckmarkCircle className="text-green-400" size={24} />{" "}
            <p className="text-lg font-semibold">
              Peserta tersebar se-Indonesia{" "}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <IoIosCheckmarkCircle className="text-green-400" size={24} />{" "}
            <p className="text-lg font-semibold">
              Prediksi kelulusan di PTN impian
            </p>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <IoIosCheckmarkCircle className="text-green-400" size={24} />{" "}
            <p className="text-lg font-semibold">Evaluasi Prestasi Belajar</p>
          </div>
        </div>
        <img
          src={`/${Directory}/peoplehero2.png`}
          alt="TOBK NASIONAL GANESHA OPERATION"
          className={`${Style.bouncingelement} absolute bottom-16 xs:top-[26rem] right-0 sm:top-40   md:hidden w-32 xs:w-52 s:w-64  sm:w-72`}
        />
        <Button>Daftar Sekarang</Button>
      </div>
      <div>
        <img
          src={`/${Directory}/peoplehero2.png`}
          alt="TOBK NASIONAL GANESHA OPERATION"
          className={`sm:w-96  mt-20 2xl:mt-16 hidden md:block md:absolute right-0 top-0 md:w-72 lg:static lg:w-full 2xl:w-[33rem] ${Style.bouncingelement}`}
        />
      </div>
    </header>
  );
};

export default Hero;
