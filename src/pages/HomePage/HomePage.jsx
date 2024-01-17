import "./homePage.scss";
import Header from "../../components/Header/Header";
import SecInicio from "./SecInicio/SecInicio";
import SecSobre from "./SecSobre/SecSobre";
import SecProjetos from "./SecProjetos/SecProjetos";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="div_home_page">
      <Header />
      <SecInicio />
      <SecSobre/>
      <SecProjetos/>
      <Footer/>
    </div>
  );
};

export default HomePage;
