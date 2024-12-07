import React from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaYoutube
} from 'react-icons/fa';

const FooterLinks = [
  {
    title: 'Home',
    link: '/#',
  },
  {
    title: 'About',
    link: '/#about',
  },
  {
    title: 'Contact',
    link: '/#contact',
  },
  {
    title: 'Blog',
    link: '/#blog',
  },
];

const Footer = ({t}) => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-2 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              {t('footerConfig.left.label')}
            </h1>
            <p className="text-sm">{t('footerConfig.left.description')}</p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>{t('footerConfig.left.location')}</p>
            </div>

            {t('heroPageConfig.contact.mobile',{returnObjects:true})?.map((mobile, mKey) => (
              <>
                <div key={mKey} className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <a href={`tel:${mobile}`}>{mobile}</a>
                </div>
              </>
            ))}

            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/deep_mishra_5633/">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.instagram.com/codevzone">
                <FaYoutube className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/thesaty4/">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className=" ">
          <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                 {t('footerConfig.right.label')}
                </h1>
              <div> {t('footerConfig.right.description')}</div></div>
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link, fKey) => (
                    <li
                      key={fKey}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, fKey) => (
                    <li
                      key={fKey}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1> 
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, fId) => (
                    <li
                      key={fId}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Footer;
