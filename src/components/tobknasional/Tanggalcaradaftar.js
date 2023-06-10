import Image from 'next/image';
import React from 'react';
import Time from '../../assets/time.png';
import Daftar from '../../assets/daftar.png';
import { MdDateRange } from 'react-icons/md';
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
              <b className="lg:text-2xl">Tanggal Pelaksanaan</b>
              <div className=" flex mt-2">
                <MdDateRange className="text-4xl lg:text-6xl me-2 inline self-center" />
                <div className="font-bold text-sm self-center inline lg:text-2xl">
                  Jumat, 28 Juli 2023 (Pukul 10.00 WIB) -<br />{' '}
                  Minggu, 30 Juli 2023 (Pukul 20.00)
                  <br />
                </div>
              </div>
            </div>
            <div className="text-primary ">
              <b className="lg:text-2xl">Tanggal Pendaftaran</b>
              <div className=" flex  mt-2">
                <MdDateRange className="text-4xl lg:text-6xl me-2" />
                <div className="font-bold text-sm self-center lg:text-2xl">
                  12 Juni 2023 – 29 Juli 2023
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:flex md:flex-row-reverse mb-8">
        <Image
          className="w-52 mx-auto md:w-72 lg:w-[26rem] lg:ms-2"
          src={Daftar}
          alt=""
        />
        <div>
          <p className="lg:text-lg">
            Untuk cara pendaftaranya sangat mudah lo, Silahkan klik
            tombol daftar sekarang lalu isi data kalian. Untuk kelas
            10 dan 11 SMA kalian hanya perlu membayar Rp 25.000 saja
            lalu untuk kelas 12 SMA hanya Rp 50.000 saja lo.
          </p>
          <div className="flex">
            <Image className="w-20 " src={Rp} />
            <div className="font-bold text-sm text-fontsecondary self-center">
              <p>Rp 25.000 (Untuk Kelas 10-11 SMA)</p>
              <p>Rp 50.000 (Untuk Kelas 10-11 SMA)</p>
            </div>
          </div>
          <Button>Daftar Sekarang</Button>
        </div>
      </div>
      <Image src={Muri} className="mx-auto " />
    </div>
  );
};

export default Tanggalcaradaftar;
