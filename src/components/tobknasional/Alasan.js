import Image from 'next/image';
import React from 'react';
import People from '../../assets/people.png';
import { Button } from './Button';

const Alasan = () => {
  return (
    <div className="mx-auto max-w-7xl md:-mt-24 lg:mt-22 px-4 md:px-12 lg:px-28 2xl:px-0 mb-12">
      <div className="sm:flex justify-center">
        <div className="ms-2 lg:pe-16">
          <h1 className="text-xl lg:text-2xl font-bold text-center px-2 mb-2 sm:text-start sm:px-0">
            Kenapa Kamu Harus Ikut Progam Ini ?
          </h1>
          <Image src={People} className="mx-auto mb-8 sm:hidden" />
          <p className="lg:text-lg text-fontsecondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Iusto reiciendis, error illum accusamus sapiente aperiam
            a, aspernatur eligendi praesentium labore porro temporibus
            distinctio enim ex debitis iure necessitatibus, sequi
            mollitia? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Iusto reiciendis, error illum accusamus
            sapiente aperiam a, aspernatur eligendi praesentium labore
            porro temporibus distinctio enim ex debitis iure
            necessitatibus, sequi mollitia?
          </p>
        </div>
        <Image src={People} className="mb-2 hidden sm:block w-80" />
      </div>
      <div className="flex justify-center">
        <Button>Daftar Sekarang</Button>
      </div>
    </div>
  );
};

export default Alasan;
