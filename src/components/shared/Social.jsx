import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex items-center gap-3 mt-6">
      <a href="#">
        <FaInstagram className="text-3xl hover:text-primary duration-300" />
      </a>
      <a href="#">
        <FaFacebook className="text-3xl hover:text-primary duration-300" />
      </a>
      <a href="#">
        <FaLinkedin className="text-3xl hover:text-primary duration-300" />
      </a>
    </div>
  );
};

export default Social;
