import "./homePage.scss";
import Header from "../../shared/components/Header/Header";

import { SecInicio, SecProjetos, SecSobre } from "./components/index";

export const HomePage = () => {
  return (
    <>
      <Header />

      <SecInicio />
      <SecSobre />
      {/* <SecProjetos /> */}
    </>
  );
};
