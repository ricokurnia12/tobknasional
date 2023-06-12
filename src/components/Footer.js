// import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaMailBulk,
  FaWhatsapp,
  FaLine,
} from 'react-icons/fa';
// import { RiLineFill } from 'react-icons/ri';
// import styles from '@/styles/Footer.module.css';
import Appstore from '../assets/Footerpic/appstore.png';
import Belanja from '../assets/Footerpic/belanja.png';
import Google from '../assets/Footerpic/google.png';
// import Logo from '../assets/Footerpic/logo.png';
// import Image from 'next/image';

// const Footer = () => {
//   return (
//     <div className={styles.FooterContainer}>
//       <section className={styles.FooterSubscription}>
//         <a href="https://ganeshaoperation.com">
//           <Image
//             className={styles.SocialIcon}
//             src={Logo}
//             alt="Ganesha operation"
//           />
//         </a>
//         <p className={styles.FooterSubHeading}>
//           Bimbel Terbaik dan Terbesar Se-Indonesia
//         </p>
//       </section>
//       <div className={styles.Wrapper}>
//         <div className={styles.Row}>
//           <div className={styles.Column}>
//             <section className={styles.Subscription}>
//               <div
//                 className={styles.AppLogo}
//                 onClick={() => {
//                   window.location.href =
//                     'https://play.google.com/store/apps/details?id=com.ganeshaoperation.kreasi&hl=in';
//                 }}
//               >
//                 <Image
//                   className={styles.AppIcon}
//                   src={Google}
//                   alt="Playstore GO Kreasi"
//                 />
//               </div>
//               <div
//                 className={styles.AppLogo}
//                 onClick={() => {
//                   window.location.href =
//                     'https://apps.apple.com/id/app/gokreasi/id1478372788';
//                 }}
//               >
//                 <Image
//                   className={styles.AppIcon}
//                   src={Appstore}
//                   alt="App store GO Kreasi"
//                 />
//               </div>
//               <p className={styles.SubHeading}>
//                 Download juga GO Kreasi. Kini sudah tersedia di
//                 Playstore dan App store.
//               </p>
//               <p className={styles.Title}>Keamanan Belanja</p>

//               <Image
//                 className={styles.SocialIcon}
//                 src={Belanja}
//                 alt="Ganesha Opeation"
//               />
//             </section>
//           </div>
//           <div className={styles.Column}>
//             <p className={styles.Title}>Hubungi Kami</p>
//             <div className={styles.Tautan}>
//               <FaPhone /> (022)4218177
//             </div>
//             <div
//               className={styles.Tautan}
//               onClick={() => {
//                 window.location.href =
//                   'https://mail.google.com/mail/u/0/?fs=1&to=bimbel@ganesha-operation.com&su=Tanya+minGO&tf=cm';
//               }}
//             >
//               <FaMailBulk /> officialgopusat@gmail.com
//             </div>
//             <div
//               className={styles.Tautan}
//               onClick={() => {
//                 window.location.href =
//                   'https://api.whatsapp.com/send?phone=628112468988&text=&source=&data=';
//               }}
//             >
//               <FaWhatsapp /> +62 811-2389-149
//             </div>
//             <div
//               className={styles.Tautan}
//               onClick={() => {
//                 window.location.href =
//                   'https://page.line.me/?accountId=769igxyd';
//               }}
//             >
//               <RiLineFill /> Ganesha Operation
//             </div>
//           </div>
//           <div className={styles.Column}>
//             <p className={styles.Title}>Info Lebih Lanjut</p>
//             <div
//               className={styles.Tautan}
//               onClick={() => {
//                 window.location.href =
//                   'https://ganeshaoperation.com/faq.html';
//               }}
//             >
//               FAQ
//             </div>
//             <div
//               className={styles.Tautan}
//               onClick={() => {
//                 window.location.href =
//                   'https://ganeshaoperation.com/kontak.html';
//               }}
//             >
//               Kontak
//             </div>
//             <div
//               className={styles.Tautan}
//               onClick={() => {
//                 window.location.href =
//                   'https://ganeshaoperation.com/privacy1.html';
//               }}
//             >
//               Privacy and Policy
//             </div>
//             <div
//               className={styles.Tautan}
//               onClick={() => {
//                 window.location.href =
//                   'https://ganeshaoperation.com/refund1.html';
//               }}
//             >
//               Refund Policy
//             </div>
//           </div>
//         </div>
//       </div>
//       <section className={styles.SocialMedia}>
//         <div className={styles.SocialMediaWrap}>
//           <small className={styles.WebsiteRights}>
//             © Copyright 2023, Ganesha Operation. All Rights Reserved
//           </small>
//           <div className={styles.SocialIcons}>
//             <a
//               className={styles.SocialIconLink}
//               href="https://id-id.facebook.com/ganesha.operation.official/"
//               target="blank"
//               aria-label="Facebook"
//             >
//               <FaFacebook />
//             </a>
//             <a
//               className={styles.SocialIconLink}
//               href="https://www.instagram.com/officialganeshaoperation/"
//               target="blank"
//               aria-label="Instagram"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               className={styles.SocialIconLink}
//               href="https://twitter.com/officialgopusat"
//               target="blank"
//               aria-label="Twitter"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               className={styles.SocialIconLink}
//               href="https://www.youtube.com/c/GaneshaOperationOfficial/videos"
//               target="blank"
//               aria-label="Youtube"
//             >
//               <FaYoutube />
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import Logo from '../assets/Footerpic/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-gray-900 p-4 text-white">
      <Image src={Logo} className="w-28 lg:w-36 mx-auto mt-8" />
      <p className="text-center mt-2 lg:text-xl font-bold lg:mt-7">
        Bimbel Terbaik dan Terbesar Se-Indonesia
      </p>
      <div className=" flex flex-col md:flex-row md:justify-center  items-center p-4 mx-auto">
        <div className="md:me-8">
          <div className="mx-auto mb-2">
            <Image
              src={Google}
              className="mx-auto"
              alt="GooglePlay Go Kreasi"
            />
            <Image
              src={Appstore}
              className="mx-auto"
              alt="AppStore Go Kreasi"
            />
            <h1 className=" text-center mb-2 lg:text-lg">
              Download Juga GO Kreasi Kini Sudah{' '}
              <br className="hide md:block" />
              Tersedia di PlayStore dan AppStore
            </h1>
          </div>
          <div>
            <h1 className="text-center font-bold mb-2 lg:text-xl">
              Keamanan Belanja
            </h1>
            <Image
              src={Belanja}
              alt="keamanan belanja ganehsa operation"
              className="md:w-36 lg:w-48 md:mx-auto"
            />
          </div>
        </div>
        <div className="self-start mt-4 md:me-8">
          <h1 className="font-bold mb-2 lg:text-2xl">Hubungi Kami</h1>
          <span className="flex lg:text-xl lg:mb-4">
            <FaPhone className="self-center me-2" /> (022) 4218177
          </span>
          <span className="flex lg:text-xl lg:mb-4">
            <FaMailBulk className="self-center me-2" />{' '}
            officialgopusat@gmail.com
          </span>
          <span className="flex lg:text-xl lg:mb-4">
            <FaWhatsapp className="self-center me-2" /> +62
            811-2468-988
          </span>
          <span className="flex lg:text-xl lg:mb-4">
            <FaLine className="self-center me-2" /> (022) 4218177
          </span>
        </div>
        <div className="mt-4 self-start">
          <h1 className=" font-bold mb-2 lg:text-2xl">
            Info Lebih Lanjut
          </h1>
          <div className="lg:text-xl">
            <a
              className="block lg:mb-4 hover:text-secondary "
              href="https://ganeshaoperation.com/faq.html"
              target="_blank"
            >
              FAQ
            </a>
            <a
              className="block lg:mb-4  hover:text-secondary "
              href="https://ganeshaoperation.com/kontak.html"
              target="_blank"
            >
              Kontak
            </a>
            <a
              className="block lg:mb-4  hover:text-secondary "
              href="https://ganeshaoperation.com/term1.html"
              target="_blank"
            >
              Syarat dan Ketentuan
            </a>
            <a
              className="block lg:mb-4  hover:text-secondary "
              target="_blank"
              href="https://ganeshaoperation.com/privacy1.html"
            >
              Kebijakan Privasi
            </a>
            <a
              className="block lg:mb-4  hover:text-secondary "
              href="https://ganeshaoperation.com/refund1.html"
              target="_blank"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5 mx-auto text-center max-w-5xl">
        <small>
          © Copyright 2023, Ganesha Operation. All Rights Reserved
        </small>
        <div className="flex justify-evenly mt-2">
          <a
            href="https://id-id.facebook.com/ganesha.operation.official/"
            target="_blank"
          >
            <FaFacebook className="text-3xl  hover:text-secondary " />
          </a>
          <a
            href="https://www.instagram.com/officialganeshaoperation/"
            target="_blank"
          >
            <FaInstagram className="text-3x  hover:text-secondary l" />
          </a>
          <a
            href="https://twitter.com/officialgopusat"
            target="_blank"
          >
            <FaTwitter className="text-3xl  hover:text-secondary " />
          </a>
          <a
            href="https://www.youtube.com/c/GaneshaOperationOfficial/videos"
            target="_blank"
          >
            <FaYoutube className="text-3xl  hover:text-secondary " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
