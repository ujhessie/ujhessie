import { HashRouter as Router, Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import ProjetosPage from "./pages/AllProjectsPage/ProjetosPage";

import { ProjetosProvider } from "./contexts/ProjetosContext";
import { DetalhesProjetos } from "./pages/DetalhesProjetos.jsx/DetalhesProjetos";

function App() {
  return (
    <ProjetosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projetos/:id" element={<DetalhesProjetos/>} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </ProjetosProvider>
  );
}

export default App;
