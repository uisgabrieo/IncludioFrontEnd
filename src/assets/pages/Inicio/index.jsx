import { Link } from "react-router-dom";
import Container from "../../components/Container"
import styles from "./Inicio.module.css";

function Inicio() {
    return (
        <>
            <header className={styles.header}>
                <Link to="/"><img src="/img/global/Logo_Site_Autismo.png" alt="Logo Includio" className={styles.logo} /></Link>
                <nav className={styles.navegacao}>
                    <div>
                        <a href="" className={styles.link}>Sobre</a>
                        <a href="" className={styles.link}>Entenda Sobre o Autismo</a>
                    </div>

                    <div className={styles.divBotoes}>
                        <Link to="/login">
                            <button className={styles.botao}>Login</button>
                        </Link>
                        <Link to="/registro">
                            <button className={styles.botao}>Sign Up</button>
                        </Link>
                    </div>
                </nav>
            </header>
            <Container>
                <section className={styles.inicial}>
                    <div className={styles.informacoes}>
                        <h1>SOBRE NÓS</h1>
                        <h2>Em busca de um mundo inclusivo e sem preconceito</h2>
                        <p>
                            A Includio é uma plataforma inovadora dedicada a conectar pessoas autistas com oportunidades de emprego. Compreendendo as necessidades e desafios únicos enfrentados por indivíduos no espectro autista, a Includio oferece um ambiente inclusivo e acolhedor onde talentos diversos podem brilhar. <br />
                            Nossa missão é promover a inclusão no mercado de trabalho, proporcionando ferramentas e recursos personalizados que auxiliam tanto candidatos quanto empregadores. Através de perfis detalhados e de fácil navegação, os usuários podem destacar suas habilidades, experiências e preferências de trabalho, facilitando a correspondência com empresas que valorizam a diversidade e a inclusão. <br />
                            Na Includio, acreditamos que cada pessoa tem um potencial extraordinário e merece uma chance justa de prosperar profissionalmente. Por isso, nos empenhamos em criar um espaço onde as diferenças são celebradas e as oportunidades são acessíveis a todos. Junte-se a nós e descubra como a Includio pode ajudar você a alcançar o sucesso no mercado de trabalho.
                        </p>
                        <div>
                            <Link to="/login">
                                <button className={styles.btnLogin}>Entrar com e-mail</button>
                            </Link>
                        </div>
                    </div>
                    <figure>
                        <img className={styles.imgHome} src="/img/index/undraw_work_time_re_hdyv.svg" alt="Ilustração Home" />
                    </figure>
                </section>
            </Container>
            <footer className={styles.footer}>
                <div className={styles.icones}>
                    <i className="bi bi-linkedin" id={styles.linkedin}></i>
                    <i className="bi bi-instagram" id={styles.instagram}></i>
                </div>
                <div className={styles.mensagem}>
                    <p>© 2024 INCLUDIO</p>
                </div>
            </footer>
        </>
    );
}

export default Inicio;
