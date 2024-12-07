import React from "react";

import OwnerImage from "../../assets/owner/owner-cropped.jpeg";
import owner1 from "../../assets/owner/owner1.jpeg";

const Testimonial = ({ t }) => {
  const ownerMap = {
    owner1,
    owner2: OwnerImage,
  };
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
              {t("testimonialConfig.header")}
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44 ">
              {t("testimonialConfig.description")}
            </p>
          </div>

          <div className="gap-4 flex justify-start text-black dark:text-white">
            {t("testimonialConfig.testimonials", { returnObjects: true })?.map(
              (testimonial) => (
                <div
                  key={testimonial.name}
                  data-aos="fade-up"
                  data-aos-delay={10}
                  className="card max-w-[500px] text-left group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
                >
                  <div className="grid place-items-start mb-4">
                    <img
                      src={ownerMap[testimonial.image]}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>

                  {/* Description and Name */}
                  <p className="text-left">{testimonial.description}</p>
                  <div className="text-left">
                    <p className="text-sm">{testimonial.subtext}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>

                  {/* Mobile number link */}
                  <a
                    className="text-sm text-blue-500"
                    href={`tel:${
                      t("heroPageConfig.contact.mobile", {
                        returnObjects: true,
                      })[0]
                    }`}
                  >
                    {
                      t("heroPageConfig.contact.mobile", {
                        returnObjects: true,
                      })[0]
                    }
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
