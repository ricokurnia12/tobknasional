import Directory from "@/baseDirectory";
import React from "react";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";

const Sistem = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 md:px-12 mb-12 lg:px-28 2xl:px-0 md:mb-36">
      <h1 className=" text-xl lg:text-4xl  font-bold text-center px-3 mb-4 md:mb-4 lg:mb-0">
        Bagaimana sistem <br className="md:hidden" />
        pelaksanaannya ?
      </h1>
      <div className="md:flex justify-center mb-1 text-fontsecondary">
        <img
          className="w-full max-w-xs hidden md:block "
          src={`/${Directory}/gokre1.png`}
          alt="Gokreasi"
        />
        <div className="self-center lg:self-start lg:mt-12">
          <p className="md:text-right lg:text-xl  mb-8">
            Kamu bisa mengerjakan TOBK di antara tanggal 4 Maret 2024 (mulai
            pukul 07:00 WIB) sampai dengan 10 Maret 2024 (paling lambat pukul
            18:00 WIB) dengan durasi TOBK selama 195 menit yang terbagi menjadi
            dua paket soal: Paket Soal TPS (105 menit) dan Paket Soal Literasi
            (90 menit)
          </p>
          <div>
            <h1 className="italic">system requirements</h1>
            <div className="flex font-bold text-lg">
              <AiFillAndroid className="self-center me-2" /> Android
            </div>
            <p>Minimal : Android 8.0 (Oreo)</p>

            <div className="flex font-bold text-lg">
              <AiFillApple className="self-center me-2" /> iOS
            </div>
            <p>Minimal : iOS 14.0</p>
          </div>
          <div className="flex justify-center md:justify-start mt-4 ">
            <img
              className="w-28 md:hidden "
              src={`/${Directory}/gokre1.png`}
              alt=""
            />
            <div className="self-center md:flex ">
              <a
                href="https://play.google.com/store/apps/details?id=com.gobimbel_online&pcampaignid=web_share"
                target="_blank"
              >
                <img
                  className="w-32 lg:w-40 mb-4 md:mb-0 md:me-4"
                  src={`/${Directory}/GooglePlay.png`}
                  alt="Playstore GO Kreasi"
                />
              </a>
              <a
                href="https://apps.apple.com/id/app/go-expert/id6471077037"
                target="_blank"
              >
                <img
                  className="w-32 lg:w-40"
                  src={`/${Directory}/AppStore.png`}
                  alt="appstore GO Kreasi"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sistem;
