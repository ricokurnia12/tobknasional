import Image from 'next/image';
import React from 'react';
import People from '../../assets/peoplealasan.png';
import { Button } from './Button';

const Alasan = () => {
  return (
    <div className="mx-auto max-w-7xl md:-mt-24 lg:mt-22 px-4 md:px-12 lg:px-28 2xl:px-0 mb-12">
      <div className="sm:flex justify-center">
        <div className="ms-2 lg:pe-16">
          <h1 className="text-xl lg:text-2xl font-bold text-center px-2 mb-2 sm:text-start sm:px-0">
            Kenapa Kamu Harus Ikut TOBK Nasional ini ?
          </h1>
          <Image
            src={People}
            className="mx-auto mb-8 sm:hidden"
            alt="TOBK NASIONAL Ganesha Operation"
          />
          <p className="lg:text-lg text-fontsecondary">
            Karena di TOBK Nasional ini, kamu akan diberikan
            kesempatan merasakan TOBK yang mirip sesungguhnya.
            Soal-soal yang diujikan mirip dengan{' '}
            <b>UTBK-SNBT sebenarnya</b>, yang dapat kamu kerjakan
            dengan system <i>blocking time</i>, kereen kan? Kamu
            bakalan ngerasa banget deg-degannya saat waktu pengerjaan
            soal akan habis. Selain itu, system penilaiannya sudah
            menggunakan <i>IRT</i> dan
            <i>CEEB</i> seperti pada UTBK-SNBT sesungguhnya.{' '}
            <b>
              Sstt.. Sistem penilaian ini akan valid jika pesertanya
              minimum 10.000 lho
            </b>
            , jadi awas yaa kamu terjebak dengan TOBK bimbel lain yang
            katanya penilaiannya <i>IRT</i> dan <i>CEEB</i>
            ..!!
          </p>
        </div>
        <Image
          src={People}
          className="mb-2 hidden sm:block w-72 lg:w-full"
          alt="TOBK NASIONAL Ganesha Operation"
        />
      </div>
      <div className="flex justify-center">
        <Button>Daftar Sekarang</Button>
      </div>
    </div>
  );
};

export default Alasan;
