import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { Button } from './Button';
import Directory from '@/baseDirectory';

const Tanggalcaradaftar = () => {
  return (
    <div className=" mx-auto  max-w-7xl px-4 md:px-12 mb-12 lg:px-28 2xl:px-0 md:mb-36">
      <div>
        <h1 className=" text-xl lg:text-4xl  font-bold text-center px-3 mb-2 md:mb-4 lg:mb-0">
          kapan Pelaksanaan TOBK Nasional dan Bagaimana cara
          pendaftaranya?
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start">
          <img
            className="w-32 md:w-52 lg:w-96 me-4"
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
                <div className=" text-sm self-center inline lg:text-2xl">
                  12 Juni 2023 – 29 Juli 2023 Pukul 12.00 WIB
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
                <div className=" text-sm self-center lg:text-2xl">
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
                <div className=" text-sm self-center lg:text-2xl">
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
        <div>
          <p className="lg:text-xl lg:text-center">
            Untuk cara pendaftaranya sangat mudah lo, Kamu tinggal
            klik tombol daftar sekarang lalu isi data diri kamu ya.
            Untuk kelas 10 dan 11 SMA/SMK/MA, kamu hanya perlu
            membayar Rp25.000 saja, dan untuk kelas 12 SMA/SMK/MA
            cukup membayar Rp50.000 ya.
          </p>
          <h1 className="font-bold text-lg mt-2 lg:text-center">
            Yuk, daftar TOBK Nasional Sekarang!
          </h1>
          <div className="flex lg:justify-center">
            <img
              className="w-12 self-center "
              alt="Go"
              src={`/${Directory}/rp.png`}
            />
            <div className="font-bold text-sm text-fontsecondary self-center">
              <p>Rp 25.000 (Untuk Kelas 10-11 SMA/SMK/MA)</p>
              <p>Rp 50.000 (Untuk Kelas 10-11 SMA/SMK/MA)</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button>Daftar Sekarang</Button>
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
