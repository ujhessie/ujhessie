/* eslint-disable react/jsx-no-target-blank */
import "./redesSociais.scss";

import { PiGithubLogoFill } from "react-icons/pi";
import { FaBehance } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const RedesSociais = () => {
  return (
    <div className="div_icons__redes_sociais">
      <a href="https://github.com/ujhessie" target="_blank" className="item">
        <PiGithubLogoFill  className="icon" />
      </a>
      <a href="https://www.behance.net/juniorrodrigues42" className="item">
        <FaBehance  className="icon" />
      </a>
      <a href="https://www.instagram.com/ujhessie_/" target="_blank"  className="item">
        <PiInstagramLogoFill  className="icon" />
      </a>
      <a href="https://t.me/ujhessie" target="_blank"  className="item">
        <FaTelegramPlane  className="icon" />
      </a>
      <a href="mailto:ujhess4502@gmail.com&body=T este+de+mensagem" target="_blank"  className="item">
        <MdEmail  className="icon" />
      </a>
    </div>
  );
};

export default RedesSociais;
