import aura from "../../assets/aura-no-bg.png";
import dezire from "../../assets/dezire.png";
import ertiga from "../../assets/ertiga-new.png";
import inova from "../../assets/inova.png";
import traveller from "../../assets/traveller.png";
import verna from "../../assets/verna.png";

import Tracker from "../shared/Tracker";

const CarList = ({ t }) => {
  const imageMap = {
    dezire,
    ertiga,
    inova,
    verna,
    traveller,
    aura,
  };

  return (
    <div id="service" className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          {t("carListConfig.heading.text")}
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          {t("carListConfig.heading.subText")}
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {t("carListConfig.content", { returnObjects: true })?.map(
              (data, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      src={imageMap[data.image]}
                      alt=""
                      className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold">{data.name}</h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <p>{data.price}</p>
                      <p>
                        <a
                          className=" text-xs rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-5 text-black"
                          href={`tel:${
                            t("heroPageConfig.contact.mobile", {
                              returnObjects: true,
                            })[0]
                          }`}
                        >
                         {t("carListConfig.cta.contentCTA")}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Tracker tracks={data.track} />
                    <Tracker tracks={data.track2} trackClass="bg-[green]" />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <a
            data-aos="fade-up"
            className="button-outline"
            href={`tel:${
              t("heroPageConfig.contact.mobile", { returnObjects: true })[0]
            }`}
          >
            {t("carListConfig.cta.footerCTA")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarList;
