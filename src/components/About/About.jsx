import bmw from '../../assets/bmw1.png';
import { aboutConfig, heroPageConfig } from '../constants/pages.const';
import Tracker from '../shared/Tracker';

const About = () => {
  return (
    <div id='about' className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={bmw}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                {aboutConfig.heading.text}
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                {aboutConfig.heading.subText}
              </p>
              {aboutConfig.description.map((item, aKey) => (
                <p key={aKey} data-aos="fade-up">
                  {item}
                </p>
              ))}
              <Tracker
                tracks={aboutConfig.tracker}
                label={'WE ALSO PROVIDE'}
                trackClass="bg-[green] w-5 h-5"
                labelClass="mt-[0px]"
              />

              <p>
              <a data-aos="fade-up" className="button-outline"   href={`tel:${heroPageConfig.contact?.mobile[0]}`}>
                {aboutConfig.cta.label}
              </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
