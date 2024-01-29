import React from "react";
import { Button } from "./Button";
import Directory from "@/baseDirectory";
import Card from "./Card";
import { BsBookHalf } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { SiBookmeter } from "react-icons/si";
import { RiBookReadFill } from "react-icons/ri";

const Alasan = () => {
  const fasilitas = [
    {
      icon: BsBookHalf,
      title: "Soal TOBK",
      details:
        "Persiapkan diri dengan mengerjakan soal-soal prediksi UTBK-SNBT.",
    },
    {
      icon: AiOutlineFieldTime,
      title: <i>Blocking Time</i>,
      details: (
        <p>
          TOBK Nasional GO menggunakan sistem <i>blocking time</i> yang sesuai
          dengan UTBK-SNBT sesunguhnya.
        </p>
      ),
    },
    {
      icon: MdOutlineAnalytics,
      title: "Penilaian",
      details: (
        <p>
          Hasil TOBK Nasional GO diolah menggunakan sistem IRT yang valid karena
          melibatkan lebih dari 10.000 peserta.
        </p>
      ),
    },
    {
      icon: SiBookmeter,
      title: "Analisis",
      details: (
        <p>
          Kamu mendapatkan laporan Evaluasi Prestasi Belajar (EPB) yang
          menganalisis kemampuan kamu dalam mengerjakan setiap butir soalnya.
        </p>
      ),
    },
    {
      icon: RiBookReadFill,
      title: "Prediksi",
      details: "Mengetahui prediksi lulus (PL) di progam studi PTN impianmu",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl md:-mt-24 lg:mt-22 px-4 md:px-12 lg:px-28 2xl:px-0 mb-12">
      <div className="sm:flex justify-center">
        <div className="ms-2 lg:pe-16">
          <h1 className="text-xl lg:text-2xl font-bold text-center px-2 mb-2 sm:text-start sm:px-0">
            Kenapa Kamu Harus Ikut TOBK Nasional Go ?
          </h1>
          <img
            src={`/${Directory}/peoplealasan.png`}
            className="mx-auto mb-8 sm:hidden "
            alt="TOBK NASIONAL Ganesha Operation"
          />
          <div className="grid grid-cols-8 ">
            <p className="lg:text-xl text-fontsecondary col-span-6">
              TOBK yang diselenggarakan oleh Ganesha Operation dengan jumlah
              peserta yang tersebar di seluruh Indonesia dan dilaksanakan
              melalui aplikasi GO Expert. Dengan mengikuti TOBK Nasional GO,
              kamu bisa mendapatkan pengalaman mengerjakan soal prediksi
              UTBK-SNBT yang dibuat oleh Ganesha Operation dengan jenis soal
              sesuai dengan aturan terbaru dari Panitia SNPMB 2024.
            </p>
            <img
              src={`/${Directory}/peoplealasan.png`}
              className="mb-2 hidden sm:block w-full  max-w-lg self-start col-span-2"
              alt="TOBK NASIONAL Ganesha Operation"
            />
          </div>
          <div className="flex justify-center  flex-wrap  w-full mt-8 ">
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
        </div>
      </div>
      {/* <div className="flex justify-center  flex-wrap w-full mt-8">
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
      </div> */}
    </div>
  );
};

export default Alasan;
