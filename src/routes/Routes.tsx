import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ProjetosPage from "../pages/Projetos/ProjetosPage";
import ProjetoPage from "../pages/Projetos/ProjetoPage/ProjetoPage";

export const MyRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/projetos' element={<ProjetosPage />} />
                    <Route
                        path='/projetos/:projeto'
                        element={<ProjetoPage />}
                    />
                </Routes>
            </Router>
        </>
    );
};
