import "./redesSociais.scss";

import { PiGithubLogoFill } from "react-icons/pi";
import { FaBehance } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";

const RedesSociais = () => {
  return (
    <div className="div_icons__redes_sociais">
      <a href="#" className="item">
        <PiGithubLogoFill  className="icon" />
      </a>
      <a href="#" className="item">
        <FaBehance  className="icon" />
      </a>
      <a href="#" className="item">
        <PiInstagramLogoFill  className="icon" />
      </a>
      <a href="#" className="item">
        <FaTelegramPlane  className="icon" />
      </a>
    </div>
  );
};

export default RedesSociais;
