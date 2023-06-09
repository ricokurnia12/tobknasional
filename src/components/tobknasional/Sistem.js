import Image from 'next/image';
import React from 'react';
import Gokre from '../../assets/gokre 1.png';
import Googleplay from '../../assets/GooglePlay.png';
import AppStore from '../../assets/AppStore.png';

const Sistem = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-12 mb-12 lg:px-28 2xl:px-0 md:mb-36">
      <h1 className=" text-xl lg:text-4xl  font-bold text-center px-3 mb-2 md:mb-4 lg:mb-0">
        Bagaimana sistem <br className="md:hidden" />
        pelaksanaanya ?
      </h1>
      <div className="md:flex justify-center mb-1 text-fontsecondary">
        <Image
          className="w-40 hidden md:block lg:w-64"
          src={Gokre}
          alt=""
        />
        <div className="self-center lg:self-start lg:mt-12">
          <p className="md:text-right lg:text-xl  mb-8">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen bookLorem Ipsum has been the industrys
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book
          </p>
          <div className="flex justify-center md:justify-end ">
            <Image className="w-28 md:hidden " src={Gokre} alt="" />
            <div className="self-center md:flex ">
              <Image
                className="w-32 lg:w-40 mb-4 md:mb-0 md:me-4"
                src={Googleplay}
              />
              <Image className="w-32 lg:w-40" src={AppStore} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sistem;
