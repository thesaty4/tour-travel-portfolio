import { useEffect } from "react";
import bmw2 from "../../assets/bmw2.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import AOS from "aos";
import { heroPageConfig } from "../constants/pages.const";

// eslint-disable-next-line react/prop-types
const Hero = ( ) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 mt-[50px] lg:mt-2 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={bmw2}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />  
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-primary text-3xl font-serif font-bold">
            {heroPageConfig.heading.text}
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            > 
              {heroPageConfig.heading.subText}
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
            {heroPageConfig.description}</p>
            <p data-aos="fade-up" data-aos-delay="1000" className="flex flex-row text-[12px] gap-[10px]">
              <span className="flex items-center"><img
                src={whatsapp}
                className="w-[30px] h-[30px]"
              /></span>
              <span> 
                {heroPageConfig.contact?.mobile?.map((contact)=><p>{contact}</p>)}
              </span>
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-10 text-black"
            >
              {heroPageConfig.cta.label}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
