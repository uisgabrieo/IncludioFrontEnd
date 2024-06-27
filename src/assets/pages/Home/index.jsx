import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import { rolarScroll, exibirVagas, buscarVagas, fecharVaga, carregarDados/*log*/ } from "../../utils/Home/home";

function Home() {
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", rolarScroll);
        return () => {
            window.removeEventListener("scroll", rolarScroll);
        };
    }, []);

    useEffect(() => {
        carregarDados()
    }, [])

    useEffect(() => {
        const botao = document.getElementById("janelaVaga");
        botao.addEventListener("click", (event) => {
            if (event.target.id === "fechar" || event.target.id === "janelaVaga") {
                fecharVaga();
            }
        });
    }, []);


    return (
        <>
            <section className={styles.homePage}>
                <section className={styles.header} id="header">
                    <Header />
                    <nav id="navMenu" className={styles.menu}>
                        <Link to="/home" id={styles.paginaAtual} className={styles.navegacaoMenu}>Home</Link>
                        <Link to="/home/perfil" className={styles.navegacaoMenu}>Perfil</Link>
                        <Link to="/home/busca" className={styles.navegacaoMenu}>Buscar</Link>
                        <Link to="/home/bug" className={styles.navegacaoMenu}>Relatar Bug</Link>
                        <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
                    </nav>
                </section>
                <section className={styles.campoBusca} id="campoBusca">
                    <form onSubmit={(e) => buscarVagas(e, filtro)} className={styles.campoFiltro} id="campoFiltro">
                        <div className={styles.inputFiltro}>
                            <input type="text" name="filtro" id="filtrar" className={styles.filtrar} placeholder="Filtrar" onChange={(e) => setFiltro(e.target.value)} />
                        </div>
                        <button type="submit" className={styles.btnFiltrar}>Filtrar</button>
                    </form>
                    <img src="../../../../img/Home/undraw_filter_re_sa16.svg" alt="Ilustração de busca" className={styles.imgBusca} />
                </section>
                <section className={styles.corpoPagina}>
                    <div className={styles.limite}>
                        <Link to="/home/adicionarVaga" className={styles.linkVaga} id="linkVaga">
                            <button className={styles.btnVaga}>
                                <i className="bi bi-plus-square-fill"></i>
                                <p>Adicionar vaga</p>
                            </button>
                        </Link>
                    </div>

                    <h1 className={styles.titulo}>EXPLORAR VAGAS</h1>
                    <div className={styles.vagas} id="posts">
                        <img className={styles.imgVaga} id="imgVaga" src="../../../../img/Home/undraw_posts_1aht.svg" alt="" />
                        <img className={styles.imgVaga} id="imgVaga" src="../../../../img/Home/undraw_posts_1aht.svg" alt="" />
                    </div>
                </section>
            </section>
            <div id="janelaVaga" className={styles.janelaVaga}>
                <div className={styles.verMais} id="verMais">
                    <i className={`bi bi-x-circle-fill ${styles.fechar}`} id="fechar"></i>
                    <button id="botaoEmail" className={styles.botaoEmail}>
                        <i className="bi bi-at"></i>
                        <h1>Email</h1>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
