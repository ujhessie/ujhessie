import "./secSobre.scss"

const SecSobre = () => {
    return (
        <section id="sobre">
            <div className="container">
                <div className="div_img">
                    <img src="imgs/me2.png" alt="" />
                </div>
                <div className="div_info">
                    <h2>Um pouquinho <span>sobre</span> o Jesse</h2>
                    <ul className="marcadores">
                        <li>Frond End</li>
                        <li>React Js</li>
                        <li>TypeScript</li>
                        <li>Designer</li>
                    </ul>
                    <p className="p_fraco">Eu mesmo. Um jovem lindo, cheiroso e charmoso navegando nesse mundo da tecnologia.</p>
                    <p>Freelancer há dois anos no mundo do desenvolvimeto web eu sigo evoluindo nessa e outras áreas...</p>
                    <p></p>
                    <div className="div_botoes">
                        <a href="" className="a_button1">Mais sobre eu</a>
                        <a href="" className="a_button2">Meus Projetos</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecSobre