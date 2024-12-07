import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = (t) => [
  {
    name: t("serviceConfig.skills.skill1.title"),
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: t("serviceConfig.skills.skill1.link"),
    description:  t("serviceConfig.skills.skill1.description"),
    aosDelay: "0",
  },
  {
    name: t("serviceConfig.skills.skill2.title"),
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: t("serviceConfig.skills.skill2.link"),
    description:  t("serviceConfig.skills.skill2.description"),
    aosDelay: "500",
  },
  {
    name: t("serviceConfig.skills.skill3.title"),
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: t("serviceConfig.skills.skill3.link"),
    description:  t("serviceConfig.skills.skill3.description"),
    aosDelay: "1000",
  },
];
const Services = ({t}) => {
  return (
    <> 
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              {t("serviceConfig.header")}
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData(t).map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a 
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                  href={`tel:${t('heroPageConfig.contact.mobile',{returnObject:true})[0]}`} >
                  {t("serviceConfig.ctaText")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
