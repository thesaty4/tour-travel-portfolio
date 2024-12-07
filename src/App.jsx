import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

// Component import
import { useTranslation } from "react-i18next";
import About from "./components/About/About";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import CarList from "./components/CarList/CarList";
import Contact from "./components/Contact/Contact";
import DevInfo from "./components/DevInfo/DevInfo";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";

const App = () => {
  const { t, i18n } = useTranslation();
  const [isHindi, setIsHindi] = useState(i18n.language === "hi");
  const changeLanguage = (language) => i18n.changeLanguage(language);

  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  // dark mode end

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} t={t} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <CarList t={t} />
      <Testimonial t={t} />
      <AppStoreBanner t={t} />
      <Contact t={t} />
      <Footer t={t} />
      <DevInfo t={t} />

      <div className="fixed text-xs  bottom-4 p-0 right-4 z-50  bg-gray-800 text-white rounded-full shadow-lg ">
      <button
          onClick={() => {
            setIsHindi(true);
            changeLanguage("hi");
          }}
          className={`${
            isHindi ? "bg-primary border-0 p-4 py-1 mr-2  font-semibold shadow-lg rounded-full  text-gray-800" : "pl-3"
          }`}
        >
          हिंदी
        </button>

        <button
          onClick={() => {
            setIsHindi(false);
            changeLanguage("en");
          }}
          className={`${
            !isHindi ?  "bg-primary border-0 p-4 py-1 ml-2  font-semibold shadow-lg rounded-full text-gray-800" : "pr-3"
          }`}
        >
          ENG
        </button>
       
      </div>
    </div>
  );
};

export default App;
