import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Perfil.module.css";
import { rolarScroll } from "../../utils/Perfil/perfil";

function Perfil() {
  useEffect(() => {
    window.addEventListener("scroll", rolarScroll);
    return () => {
      window.removeEventListener("scroll", rolarScroll);
    };
  }, []);

  useEffect(() => {
    const contaResposta = JSON.parse(sessionStorage.getItem("accountResponse"));
    const conta = JSON.parse(contaResposta);

    const tipoConta = conta.account.toLowerCase();
    if (tipoConta === "employee") {
      const div = document.getElementById("divEmpresa");
      if (div) {
        div.remove();
      }
    }
  }, [])

  return (
    <>
      <section className={styles.homePage}>
        <section className={styles.header} id="header">
          <Header />
          <nav id="navMenu" className={styles.menu}>
            <Link to="/home" className={styles.navegacaoMenu}>Home</Link>
            <Link to="/home/perfil" id={styles.paginaAtual} className={styles.navegacaoMenu}>Perfil</Link>
            <Link to="/home/busca" className={styles.navegacaoMenu}>Buscar</Link>
            <Link to="/home/bug" className={styles.navegacaoMenu}>Relatar Bug</Link>
            <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
          </nav>
        </section>
        <main className={styles.container}>
          <section className={styles.campoPerfil}>
            <div id="img"></div>
            <div className={styles.nomeUsuario} id="nomeUsuario"></div>
            <button className={styles.botaoPerfil} id={styles.editar}>
              <i className="bi bi-pencil-square"></i>
              <p>Editar Perfil</p>
            </button>
            <button className={styles.botaoPerfil} id={styles.sair}>
              <i className="bi bi-box-arrow-left"></i>
              <p>Sair</p>
            </button>
          </section>
          <section className={styles.campoVagas}>
            <div className={styles.endereco}>
              <h1>ENDEREÇO</h1>
              <div className={styles.divEndereco} id="divEndereco">
              </div>
            </div>
            <div className={styles.pessoais}>
              <h1>DADOS PESSOAIS</h1>
              <div className={styles.divPessoais} id="divPessoais">
              </div>
            </div>
            <div className={styles.empresa} id="divEmpresa">
              <h1>EMPRESA</h1>
              <div className={styles.divEmpresa}>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
}

export default Perfil;
