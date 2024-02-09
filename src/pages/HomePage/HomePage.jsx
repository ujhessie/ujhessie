import "./homePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { SecInicio, SecProjetos, SecSobre } from "./components/index";
import { RedesSociais } from "../../components/RedesSociais/RedesSociais";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="div_home_page">
        <SecInicio />
        <SecSobre />
        <SecProjetos />
        {/* <Footer/> */}
      </div>
      <RedesSociais />
    </>
  );
};

export default HomePage;
