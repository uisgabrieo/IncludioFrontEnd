import { Link } from "react-router-dom"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Inicio.module.css"

function Inicio() {
    return (
        <>
            <Header />
            <section className="container">
                <div className="informacoes">
                    <h1>SOBRE NÓS</h1>
                    <h2>Em busca de um mundo inclusivo e sem preconceito</h2>
                    <p>
                        A Includio é uma plataforma inovadora dedicada a conectar pessoas autistas com oportunidades de emprego. Compreendendo as necessidades e desafios únicos enfrentados por indivíduos no espectro autista, a Includio oferece um ambiente inclusivo e acolhedor onde talentos diversos podem brilhar. <br />
                        Nossa missão é promover a inclusão no mercado de trabalho, proporcionando ferramentas e recursos personalizados que auxiliam tanto candidatos quanto empregadores. Através de perfis detalhados e de fácil navegação, os usuários podem destacar suas habilidades, experiências e preferências de trabalho, facilitando a correspondência com empresas que valorizam a diversidade e a inclusão. <br />
                        Na Includio, acreditamos que cada pessoa tem um potencial extraordinário e merece uma chance justa de prosperar profissionalmente. Por isso, nos empenhamos em criar um espaço onde as diferenças são celebradas e as oportunidades são acessíveis a todos. Junte-se a nós e descubra como a Includio pode ajudar você a alcançar o sucesso no mercado de trabalho.
                    </p>
                    <div>
                        <Link to="/login">
                        <button className="btnLogin">Entrar com e-mail</button>
                        </Link>
                    </div>
                </div>
                <figure>
                    <img clasName="imgHome" src="/img/index/HomeImage.svg" alt="Ilustração Home" />
                </figure>
            </section>
            <Footer />
        </>
    )
}

export default Inicio;    