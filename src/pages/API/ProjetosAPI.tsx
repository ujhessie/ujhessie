import React from "react";
import { projetos } from "../../data/projetos";

const ProjetosAPI = () => {
  return (
    <pre style={{ fontFamily: "monospace", whiteSpace: "pre-wrap" }}>
      {JSON.stringify(projetos, null, 2)}
    </pre>
  );
};

export default ProjetosAPI;
