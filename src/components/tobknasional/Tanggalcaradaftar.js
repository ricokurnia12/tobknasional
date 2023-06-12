import Image from 'next/image';
import React from 'react';
import Time from '../../assets/time.png';
import Daftar from '../../assets/daftar.png';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import Rp from '../../assets/rp.png';
import { Button } from './Button';
import Muri from '../../assets/Penghargaan.png';

const Tanggalcaradaftar = () => {
  return (
    <div className="mb-52 mx-auto  max-w-7xl px-4 md:px-12 mb-12 lg:px-28 2xl:px-0 md:mb-36">
      <div>
        <h1 className=" text-xl lg:text-4xl  font-bold text-center px-3 mb-2 md:mb-4 lg:mb-0">
          kapan Pelaksanaan TOBK Nasional dan Bagaimana cara
          pendaftaranya?
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start">
          <Image className="w-32 md:w-52 lg:w-96 me-4" src={Time} />
          <div>
            <div className="text-primary mb-4">
              <div>
                <MdDateRange className="text-4xl lg:text-6xl me-2 inline self-center" />
                <b className="lg:text-2xl">Tanggal Pendaftaran</b>
              </div>
              <div className=" flex mt-2">
                {/* <MdDateRange className="text-4xl lg:text-6xl me-2 inline self-center" /> */}
                <div className="font-bold text-sm self-center inline lg:text-2xl">
                  12 Juni 2023 – 29 Juli 2023 Pukul 12.00 WIB
                  <br />
                </div>
              </div>
            </div>
            <div className="text-primary ">
              <div className="flex">
                <MdDateRange className="text-4xl lg:text-6xl me-2 self-center" />
                <b className="lg:text-2xl">Tanggal Pelaksanaan</b>
              </div>
              <div className=" flex  mt-2">
                {/* <MdDateRange className="text-4xl lg:text-6xl me-2 self-center" /> */}
                <div className="font-bold text-sm self-center lg:text-2xl">
                  Jumat, 28 Juli 2023 (Pukul 10.00 WIB - 20.00 WIB)
                  <br /> Sabtu, 29 Juli 2023 (Pukul 10.00 WIB - 20.00
                  WIB)
                  <br />
                  Minggu, 30 Juli 2023 (Pukul 10.00 WIB - 20.00 WIB)
                </div>
              </div>
            </div>
            <div className="text-primary ">
              <div>
                <AiOutlineFieldTime className="inline text-4xl self-center lg:text-6xl me-2" />
                <b className="lg:text-2xl">Durasi Pelaksanaan</b>
              </div>

              <div className=" flex  mt-2">
                <div className="font-bold text-sm self-center lg:text-2xl">
                  Kelas 10 dan 11 SMA/SMK/MA : 100 Menit
                  <br />
                  Kelas 12 SMA/SMK/MA : 90 Menit + 105 Menit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:flex md:flex-row-reverse mb-8">
        {/* <Image
          className="w-52 mx-auto md:w-72 lg:w-[26rem] lg:ms-2"
          src={Daftar}
          alt=""
        /> */}
        <div>
          <p className="lg:text-lg">
            Untuk cara pendaftaranya sangat mudah lo, Kamu tinggal
            klik tombol daftar sekarang lalu isi data diri kamu ya.
            Untuk kelas 10 dan 11 SMA/SMK/MA, kamu hanya perlu
            membayar Rp25.000 saja, dan untuk kelas 12 SMA/SMK/MA
            cukup membayar Rp50.000 ya.
          </p>
          <h1 className="font-bold text-lg mt-2">
            Yuk, daftar TOBK Nasional Sekarang!
          </h1>
          <div className="flex">
            <Image className="w-12 self-center " src={Rp} />
            <div className="font-bold text-sm text-fontsecondary self-center">
              <p>Rp 25.000 (Untuk Kelas 10-11 SMA/SMK/MA)</p>
              <p>Rp 50.000 (Untuk Kelas 10-11 SMA/SMK/MA)</p>
            </div>
          </div>
          <Button>Daftar Sekarang</Button>
        </div>
      </div>
      {/* <Image src={Muri} className="mx-auto " /> */}

      {/* Yotube video */}

      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className=" text-xl lg:text-4xl  font-bold text-center px-3 mb-2 md:mb-12">
          Apa Kata Mereka Tentang Soal-soal UTBK-SNBT 2023
        </h1>
        <div className="text-center ratio ratio-16x9">
          {/* <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/watch?v=95V7THWcanM?controls=0&amp;start=805&end=850"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          <iframe
            className=" aspect-square shadow-xl rounded-xl border border-fontprimary  "
            width="640"
            height="360"
            src="https://www.youtube.com/embed/95V7THWcanM?rel=0"
            title="SOAL UTBK-SNBT MIRIP GO!!!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tanggalcaradaftar;
