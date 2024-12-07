import React from 'react';
import OwnerCard from "../../assets/owner/card.jpeg";
import pattern from '../../assets/website/pattern.jpeg';

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};
const AppStoreBanner = ({t}) => {
  const bannerMapping = {
    OwnerCard
  }
  return (
    <div className="container">
      <div
        className=" text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={bannerImg}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold font-serif"
            >
              {t('appStoreBanner.label')}
            </h1>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center"
            >
              <a href="#">
                <img
                  src={bannerMapping[t('appStoreBanner.image')]}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[500px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
