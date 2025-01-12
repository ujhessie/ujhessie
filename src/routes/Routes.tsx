import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import ProjetosPage from '../pages/Projetos/ProjetosPage';
import ProjetoPage from '../pages/Projetos/ProjetoPage/ProjetoPage';
import ProjetosAPI from '../pages/API/ProjetosAPI'; // Importando o componente

export const MyRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/projetos' element={<ProjetosPage />} />
                    <Route path='/projetos/:projeto' element={<ProjetoPage />} />
                    <Route path='/api/projetos' element={<ProjetosAPI />} /> {/* Adicionando a rota */}
                </Routes>
            </Router>
        </>
    );
};
