import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/projetos/:id" element={<HomePage />} /> */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
