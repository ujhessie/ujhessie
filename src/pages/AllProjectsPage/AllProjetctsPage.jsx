import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SecTodosProjetos from "./SecProjetos/SecTodosProjetos";

const AllProjetctsPage = () => {
    return (
        <div className="div_all_projects">
            <Header/>
            <SecTodosProjetos/>
            <Footer/>
        </div>
    )
}

export default AllProjetctsPage