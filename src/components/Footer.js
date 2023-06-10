import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaMailBulk,
  FaWhatsapp,
} from 'react-icons/fa';
import { RiLineFill } from 'react-icons/ri';
import styles from '@/styles/Footer.module.css';
import Appstore from '../assets/Footerpic/appstore.png';
import Belanja from '../assets/Footerpic/belanja.png';
import Google from '../assets/Footerpic/google.png';
import Logo from '../assets/Footerpic/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <section className={styles.FooterSubscription}>
        <a href="https://ganeshaoperation.com">
          <Image
            className={styles.SocialIcon}
            src={Logo}
            alt="Ganesha operation"
          />
        </a>
        <p className={styles.FooterSubHeading}>
          Bimbel Terbaik dan Terbesar Se-Indonesia
        </p>
      </section>
      <div className={styles.Wrapper}>
        <div className={styles.Row}>
          <div className={styles.Column}>
            <section className={styles.Subscription}>
              <div
                className={styles.AppLogo}
                onClick={() => {
                  window.location.href =
                    'https://play.google.com/store/apps/details?id=com.ganeshaoperation.kreasi&hl=in';
                }}
              >
                <Image
                  className={styles.AppIcon}
                  src={Google}
                  alt="Playstore GO Kreasi"
                />
              </div>
              <div
                className={styles.AppLogo}
                onClick={() => {
                  window.location.href =
                    'https://apps.apple.com/id/app/gokreasi/id1478372788';
                }}
              >
                <Image
                  className={styles.AppIcon}
                  src={Appstore}
                  alt="App store GO Kreasi"
                />
              </div>
              <p className={styles.SubHeading}>
                Download juga GO Kreasi. Kini sudah tersedia di
                Playstore dan App store.
              </p>
              <p className={styles.Title}>Keamanan Belanja</p>

              <Image
                className={styles.SocialIcon}
                src={Belanja}
                alt="Ganesha Opeation"
              />
            </section>
          </div>
          <div className={styles.Column}>
            <p className={styles.Title}>Hubungi Kami</p>
            <div className={styles.Tautan}>
              <FaPhone /> (022)4218177
            </div>
            <div
              className={styles.Tautan}
              onClick={() => {
                window.location.href =
                  'https://mail.google.com/mail/u/0/?fs=1&to=bimbel@ganesha-operation.com&su=Tanya+minGO&tf=cm';
              }}
            >
              <FaMailBulk /> officialgopusat@gmail.com
            </div>
            <div
              className={styles.Tautan}
              onClick={() => {
                window.location.href =
                  'https://api.whatsapp.com/send?phone=628112468988&text=&source=&data=';
              }}
            >
              <FaWhatsapp /> +62 811-2389-149
            </div>
            <div
              className={styles.Tautan}
              onClick={() => {
                window.location.href =
                  'https://page.line.me/?accountId=769igxyd';
              }}
            >
              <RiLineFill /> Ganesha Operation
            </div>
          </div>
          <div className={styles.Column}>
            <p className={styles.Title}>Info Lebih Lanjut</p>
            <div
              className={styles.Tautan}
              onClick={() => {
                window.location.href =
                  'https://ganeshaoperation.com/faq.html';
              }}
            >
              FAQ
            </div>
            <div
              className={styles.Tautan}
              onClick={() => {
                window.location.href =
                  'https://ganeshaoperation.com/kontak.html';
              }}
            >
              Kontak
            </div>
            <div
              className={styles.Tautan}
              onClick={() => {
                window.location.href =
                  'https://ganeshaoperation.com/privacy1.html';
              }}
            >
              Privacy and Policy
            </div>
            <div
              className={styles.Tautan}
              onClick={() => {
                window.location.href =
                  'https://ganeshaoperation.com/refund1.html';
              }}
            >
              Refund Policy
            </div>
          </div>
        </div>
      </div>
      <section className={styles.SocialMedia}>
        <div className={styles.SocialMediaWrap}>
          <small className={styles.WebsiteRights}>
            © Copyright 2023, Ganesha Operation. All Rights Reserved
          </small>
          <div className={styles.SocialIcons}>
            <a
              className={styles.SocialIconLink}
              href="https://id-id.facebook.com/ganesha.operation.official/"
              target="blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className={styles.SocialIconLink}
              href="https://www.instagram.com/officialganeshaoperation/"
              target="blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className={styles.SocialIconLink}
              href="https://twitter.com/officialgopusat"
              target="blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className={styles.SocialIconLink}
              href="https://www.youtube.com/c/GaneshaOperationOfficial/videos"
              target="blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
