import Directory from '@/baseDirectory';
import React from 'react';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';

const Sistem = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 md:px-12 mb-12 lg:px-28 2xl:px-0 md:mb-36">
      <h1 className=" text-xl lg:text-4xl  font-bold text-center px-3 mb-4 md:mb-4 lg:mb-0">
        Bagaimana sistem <br className="md:hidden" />
        pelaksanaanya ?
      </h1>
      <div className="md:flex justify-center mb-1 text-fontsecondary">
        <img
          className="w-full hidden md:block "
          src={`/${Directory}/gokre1.png`}
          alt="Gokreasi"
        />
        <div className="self-center lg:self-start lg:mt-12">
          <p className="md:text-right lg:text-xl  mb-8">
            TOBK Nasional ini dilaksanakan untuk kamu kelas 10, 11,
            dan 12 SMA/SMK/MA. Kamu bisa pilih 1 tanggal pelaksanaan
            TOBK di periode 28 Juli, 29 Juli, atau 30 Juli 2023. Untuk
            kelas 10 dan 11 SMA/SMK/MA durasi TO selama 100 menit, dan
            untuk kelas 12 SMA/SMK/MA durasi TO 90 menit + 105 menit.
            TOBK nasional ini dilaksanakan melalui GO Kreasi lho! Nah
            untuk kamu yang belum menjadi siswa GO, kamu diberi
            kesempatan untuk ngerasain asyiknya TOBK di GO Kreasi lho!
            Tunggu apalagi? Yuk, daftar sekarang juga..!!
          </p>
          <div>
            <h1 className="italic">system requirements</h1>
            <div className="flex font-bold text-lg">
              <AiFillAndroid className="self-center me-2" /> Android
            </div>
            <p>Minimal : Android 5.0 (Lollipop), API Level 21</p>
            <p>Maksimal : Android 13 (Tiramisu), API Level 33</p>
            <div className="flex font-bold text-lg">
              <AiFillApple className="self-center me-2" /> iOS
            </div>
            <p>Minimal : Android 5.0 (Lollipop), API Level 21</p>
            <p>Maksimal : Android 13 (Tiramisu), API Level 33</p>
          </div>
          <div className="flex justify-center md:justify-start mt-4 ">
            <img
              className="w-28 md:hidden "
              src={`/${Directory}/gokre1.png`}
              alt=""
            />
            <div className="self-center md:flex ">
              <a
                href="https://play.google.com/store/apps/details?id=com.ganeshaoperation.kreasiv4"
                target="_blank"
              >
                <img
                  className="w-32 lg:w-40 mb-4 md:mb-0 md:me-4"
                  src={`/${Directory}/GooglePlay.png`}
                  alt="Playstore GO Kreasi"
                />
              </a>
              <a
                href="https://apps.apple.com/id/app/go-kreasi-siswa-ortu/id1634767332"
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
