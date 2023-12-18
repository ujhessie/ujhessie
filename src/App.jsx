import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PageInicio from "./components/pages/PageInicio";
import PageTodosProjetos from "./components/pages/PageTodosProjetos";
import ProjectDetail from "./ProjectDetail";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import SecContatos from './components/sections/SecContatos';
import ButtonScroll from "./components/ButtonScroll/ButtonScroll";
import ButtonBack from './components/buttonsNavigation/ButtonBack';

function App() {
  return (
    <Router>
      <Header />

      <main>
        <ButtonScroll />
        <ButtonBack/>
        <Routes>
          <Route path="/" element={<PageInicio />} />
          <Route path="/todosprojetos" element={<PageTodosProjetos />} />
          <Route path="/projeto/:projectId" element={<ProjectDetail />} />
          <Route path="*" element={<PageInicio />} />
        </Routes>
      </main>

      <SecContatos />
      <Footer />
    </Router>
  );
}

export default App;
