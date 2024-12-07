import React from 'react';

import OwnerImage from '../../assets/owner/owner-cropped.jpeg';
import { heroPageConfig } from '../constants/pages.const';

const testimonialData = [
  {
    name: 'Deep Mishra',
    subtext: '- Owner',
    image: OwnerImage,
    description: `I am trying to provide the best services to my customers. I am always available for them. If you have any concern regarding the traveling or any suggestion then please do not hesitate to contact me. I will be happy to help you. I am always available for you.`,
    aosDelay: '0',
  },
];

const testimonialConfig = {
  header: 'Thought & Promise Of Owner',
  description: `Hello, I'm Deep. At Gayatri Trips, we specialize in premium travel solutions. From luxurious travel cards for seamless journeys to bespoke wedding bookings and curated tours, we elevate your travel experience with luxury and comfort in mind.`,
};

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              {testimonialConfig.header}
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44 ">
              {testimonialConfig.description}
            </p>
          </div>

          <div className="gap-4 flex justify-center  text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card max-w-[500px]  text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src={skill.image}
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                {/* <div className="text-2xl">⭐⭐⭐⭐⭐</div> */}
                <p>{skill.description}</p>
                <p>
                  <p className="text-center text-sm">{skill.subtext}</p>
                  <p className="text-center font-semibold">{skill.name}</p>
                  <a className="text-center text-sm" href={`tel:${heroPageConfig.contact.mobile[0]}`}>
                    {heroPageConfig.contact.mobile[0]}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
