import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Perfil.module.css";

function Perfil() {
  return (
    <>
      <section className={styles.homePage}>
        <Header />
        <nav className={styles.menu}>
          <Link to="/home" className={styles.navegacaoMenu}>
            Home
          </Link>
          <Link to="/home/busca" className={styles.navegacaoMenu}>
            Buscar
          </Link>
          <Link to="/home/bug" className={styles.navegacaoMenu}>
            Relatar Bug
          </Link>
          <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
        </nav>
        <main className={styles.container}>
          <section className={styles.campoPerfil}>
            <div className={styles.editar}>
              <button className={styles.editarButton}>
                <span>
                  <i class="bi bi-pencil-fill"></i>Editar
                </span>
              </button>
            </div>
            <img
              src="../../../../public/img/global/gato.webp"
              alt=""
              className="imgPerfil"
            />
            <h1 className={styles.profileName}>Livia Oliveira</h1>
            <div className={styles.profileDetails}>
              <div className={styles.profileItem}>
                <span>E-mail</span>
                <span>livia@gmail.com</span>
              </div>
              <div className={styles.profileItem}>
                <span>Data de nascimento</span>
                <span>10/05/2001</span>
              </div>
              <div className={styles.profileItem}>
                <span>Localização</span>
                <span>Teresina</span>
              </div>
              <div className={styles.profileItem}>
                <span>Contato</span>
                <span>(94)72743-9983</span>
              </div>
              <div className={styles.profileItem}>
                <span>Gênero</span>
                <span>Mulher</span>
              </div>
            </div>
            <div className={styles.logout}>
              <button className={styles.logoutButton}>
                <span>
                  <i class="bi bi-box-arrow-left"></i>Log out
                </span>
              </button>
            </div>
          </section>
        </main>
      </section>
      <Footer />
    </>
  );
}

export default Perfil;
