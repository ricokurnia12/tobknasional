import React from "react";
import Card from "./Card";
import { Button } from "./Button";
import { BsBookHalf } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { SiBookmeter } from "react-icons/si";
import { RiBookReadFill } from "react-icons/ri";
import Alasan from "./Alasan";

const PenjelasanTobk = () => {
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
    <div className="mx-auto max-w-7xl  md:mt-4 px-4 lg:px-28 2xl:px-0 mb-10">
      <div className="text-center mb-40">
        <h1 className="text-xl lg:text-4xl  font-bold mb-4 lg:mb-8">
          Apa Itu TOBK Nasional Ganesha Operation ?
        </h1>
        <p className="text-fontsecondary lg:text-xl  2xl:px-24">
          <i>Try Out</i> Berbasis Komputer (TOBK) yang diselenggarakan oleh
          Ganesha Operation dengan jumlah peserta tersebar se-Indonesia dan
          dilaksanakan melalui aplikasi GO Kreasi. TOBK ini diadakan agar kamu
          tahu bagaimana gambaran pelaksanaan UTBK-SNBT, soal-soal yang
          diujikannya, juga system penilaiannya. Oiyaa, kamu jangan sampai salah
          pilih TOBK yaa, karena di luar sana banyak loh TOBK kaleng-kaleng yang
          mengaku menggunakan soal-soal dan system penilaian yang mirip dengan
          UTBK-SNBT sesungguhnya..!!
        </p>
      </div>
      <Alasan />
      <div className="max-w-5xl mx-auto">
        {/* <h1 className="text-center text-xl lg:text-4xl  font-bold mb-4 lg:mb-8">
          Fasilitas Yang Kamu Dapatkan
        </h1> */}
        {/* <div className="flex justify-center  flex-wrap max-w-">
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
        <div className="flex justify-center">
          <Button>Daftar Sekarang</Button>
        </div>
      </div>
    </div>
  );
};

export default PenjelasanTobk;
