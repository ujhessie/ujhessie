import "./homePage.scss";
import Header from "../../shared/components/Header/Header";


import { SecInicio, SecProjetos, SecSobre } from "./components/index";
import { RedesSociais } from "../../shared/components/RedesSociais/RedesSociais";

export const HomePage = () => {
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


