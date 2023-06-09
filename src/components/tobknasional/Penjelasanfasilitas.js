import React from 'react';
import Card from './Card';

const PenjelasanTobk = () => {
  const fasilitas = [
    {
      icon: '',
      title: 'Soal TOBK',
      details:
        'Siswa mendapatkan soal TOBK yang persis UTBK SNBT sebenarnya',
    },
    {
      icon: '',
      title: 'Soal TOBK',
      details:
        'Siswa mendapatkan soal TOBK yang persis UTBK SNBT sebenarnya',
    },
    {
      icon: '',
      title: 'Soal TOBK',
      details:
        'Siswa mendapatkan soal TOBK yang persis UTBK SNBT sebenarnya',
    },
    {
      icon: '',
      title: 'Soal TOBK',
      details:
        'Siswa mendapatkan soal TOBK yang persis UTBK SNBT sebenarnya',
    },
    {
      icon: '',
      title: 'Soal TOBK',
      details:
        'Siswa mendapatkan soal TOBK yang persis UTBK SNBT sebenarnya',
    },
    {
      icon: '',
      title: 'Soal TOBK',
      details:
        'Siswa mendapatkan soal TOBK yang persis UTBK SNBT sebenarnya',
    },
    {
      icon: '',
      title: 'Soal TOBK',
      details:
        'Siswa mendapatkan soal TOBK yang persis UTBK SNBT sebenarnya',
    },
    {
      icon: '',
      title: 'Soal TOBK',
      details:
        'Siswa mendapatkan soal TOBK yang persis UTBK SNBT sebenarnya',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl md:-mt-24 lg:mt-28 px-4 lg:px-28 2xl:px-0 mb-16">
      <div className="text-center mb-8">
        <h1 className="text-xl lg:text-4xl  font-bold mb-4">
          Apa Itu TOBK Nasional Ganesha Operation ?{' '}
        </h1>
        <p className="text-fontsecondary  2xl:px-24">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen bookLorem Ipsum has been the industrys
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a
          type specimen book
        </p>
      </div>
      <h1 className="text-center mb-8 text-xl lg:text-4xl  font-bold mb-4">
        Fasilitas Yang Kamu Dapatkan
      </h1>
      <div className="flex justify-center 2xl:justify-center flex-wrap">
        {fasilitas.map((fas, i) => {
          return (
            <div key={i} className="sm:me-2 2xl:me-8 mb-2 sm:mb-4">
              <Card />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PenjelasanTobk;
