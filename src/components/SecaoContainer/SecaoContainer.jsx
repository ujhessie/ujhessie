import "./secaoContainer.scss";

export const SecaoContainer = ({ children }) => {
  return <section className="secaoContainer">{children}</section>;
};

export const ContentSecao = ({ children }) => {
  return <div className="contentSec">{children}</div>;
};
