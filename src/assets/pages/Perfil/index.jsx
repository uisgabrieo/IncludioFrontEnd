import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Perfil.module.css";
import { carregarPerfil, rolarScroll } from "../../utils/Perfil/perfil";

function Perfil() {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", rolarScroll);
    return () => {
      window.removeEventListener("scroll", rolarScroll);
    };
  }, []);

  useEffect(() => {
    const contaResposta = JSON.parse(localStorage.getItem("accountResponse"));
    const conta = JSON.parse(contaResposta);
    console.log(conta);

    const tipoConta = conta.account.toLowerCase();
    if (tipoConta === "employee") {
      const divEmpresa = document.getElementById("divEmpresaExibir");
      if (divEmpresa) {
        divEmpresa.innerHTML = "";
      }
    }
  }, []);

  useEffect(() => {
    const carregarDados = async () => {
      await carregarPerfil();
      setCarregando(false);
    };

    carregarDados();
  }, []);

  if (carregando) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

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
            <Link to={"/home/perfil/editar"}>
              <button className={styles.botaoPerfil} id={styles.editar}>
                <i className="bi bi-pencil-square"></i>
                <p>Editar Perfil</p>
              </button>
            </Link>
            <Link to={"/"}><button className={styles.botaoPerfil} id={styles.sair}>
              <i className="bi bi-box-arrow-left"></i>
              <p>Sair</p>
            </button></Link>
          </section>
          <section className={styles.campoVagas}>
            <div className={styles.endereco}>
              <h1>ENDEREÇO</h1>
              <div className={styles.divEndereco} id="divEndereco">
              </div>
            </div>
            <div className={styles.pessoais}>
              <h1>DADOS PESSOAIS</h1>
              <div className={styles.divPessoais} id="divPessoais"></div>
            </div>
            <div className={styles.empresa} id="divEmpresaExibir">
              <h1>EMPRESA</h1>
              <div className={styles.divEmpresa} id="divEmpresa"></div>
            </div>
          </section>
        </main>
        <Footer />
      </section>
    </>
  );
}

export default Perfil;