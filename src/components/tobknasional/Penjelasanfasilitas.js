import React from 'react';
import Card from './Card';
import { Button } from './Button';
import { BsBookHalf } from 'react-icons/bs';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { MdOutlineAnalytics } from 'react-icons/md';
import { SiBookmeter } from 'react-icons/si';
import { RiBookReadFill } from 'react-icons/ri';

const PenjelasanTobk = () => {
  const fasilitas = [
    {
      icon: BsBookHalf,
      title: 'Soal TOBK',
      details: 'Soal TOBK yang persis UTBK-SNBT sebenarnya',
    },
    {
      icon: AiOutlineFieldTime,
      title: <i>Blocking Time</i>,
      details: (
        <p>
          TOBK menggunakan system <i>blocking time</i> yaitu waktu
          pengerjaan per <i>subtest</i> ujian
        </p>
      ),
    },
    {
      icon: MdOutlineAnalytics,
      title: 'Penilaian',
      details: (
        <p>
          Penilaian <i>IRT</i> dan <i>CEEB</i> yang sama digunakan
          pada saat penilaian SNBT
        </p>
      ),
    },
    {
      icon: SiBookmeter,
      title: 'Analisis',
      details:
        'Analisis hasil TOBK SNBT melalui Evaluasi Prestasi Belajar(EPB) yang dapat dilihat pada GO Kreasi',
    },
    {
      icon: RiBookReadFill,
      title: 'Prediksi',
      details:
        'Mengetahui prediksi lulus(PL) di progam studi PTN impianmu',
    },
  ];

  return (
    <div className="mx-auto max-w-7xl  md:mt-28 px-4 lg:px-28 2xl:px-0 mb-10">
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center mb-8 text-xl lg:text-4xl  font-bold mb-4">
          Fasilitas Yang Kamu Dapatkan
        </h1>
        <div className="flex justify-center  flex-wrap max-w-">
          {fasilitas.map((fas, i) => {
            return (
              <div key={i} className="sm:me-2 2xl:me-8 mb-2 sm:mb-4">
                <Card
                  icon={<fas.icon size={20} className="me-2" />}
                  title={fas.title}
                  detail={fas.details}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          {' '}
          <Button>Daftar Sekarang</Button>
        </div>
      </div>
    </div>
  );
};

export default PenjelasanTobk;
