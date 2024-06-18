import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Editar.module.css";
import { carregarPerfil, rolarScroll } from "../../utils/Editar/editar.js";


function Perfil() {
  useEffect(() => {
    window.addEventListener("scroll", rolarScroll);
    return () => {
      window.removeEventListener("scroll", rolarScroll);
    };
  }, []);

  useEffect(() => {
    carregarPerfil();
  }, []);

  return (
    <>
      <section className={styles.homePage}>
        <section className={styles.header} id="header">
          <Header />
          <nav id="navMenu" className={styles.menu}>
            <Link to="/home" className={styles.navegacaoMenu}>Home</Link>
            <Link to="/home/perfil" className={styles.navegacaoMenu}>Perfil</Link>
            <Link to="/home/busca" className={styles.navegacaoMenu}>Buscar</Link>
            <Link to="/home/bug" className={styles.navegacaoMenu}>Relatar Bug</Link>
            <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`}></i>
          </nav>  
        </section>
        <main className={styles.container}>
          <section className={styles.campoPerfil}>
            <label htmlFor="foto">
              Foto<br />
              <label htmlFor="imagemPerfil" className={styles.btnUpload}>Insira sua Foto</label>
              <input type="file" name="imagemPerfil" id="imagemPerfil" className={styles.credenciaisFile} accept="image/*" />
            </label>
            <button className={styles.botaoPerfil}>Salvar</button>
            <Link to={"/"}><button className={styles.botaoPerfil} id={styles.sair}>
              <i className="bi bi-box-arrow-left"></i>
              <p>Sair</p>
            </button></Link>
          </section>
          <section className={styles.campoVagas}>
            <div className={styles.endereco}>
              <h1>ENDEREÇO</h1>
              <div className={styles.divEndereco} id="divEndereco">
                <form>
                  <div>
                    País
                    <input type="text" placeholder="Pais" />
                  </div>
                  <div>
                    Estado
                    <input type="text" placeholder="estado" />
                  </div>
                  <div>
                    Cidade
                    <input type="text" placeholder="cidade" />
                  </div>
                  <div>
                    Complemento
                    <input type="text" placeholder="complemento" />
                  </div>
                  <div>
                    CEP
                    <input type="text" placeholder="cep" />
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.pessoais}>
              <h1>DADOS PESSOAIS</h1>
              <div className={styles.divPessoais} id="divPessoais">
                <form>
                  <div>
                    <label htmlFor="nome">
                      Nome Completo
                      <input type="text" placeholder="nome completo" />
                    </label>
                  </div>
                  <label htmlFor="telefone">
                    <div>
                      Telefone
                      <input type="text" placeholder="numero telefone" />
                    </div>
                  </label>
                  <div>
                    <label htmlFor="genero">
                      Genero
                      <select name="genero" id="genero" defaultValue="" className={styles.credenciais} onChange={(e) => setGenero(e.target.value)}>
                        <option value="" disabled>Escolha uma opção</option>
                        <option value="HOMEM">Homem</option>
                        <option value="MULHER">Mulher</option>
                        <option value="OUTRO">Outro</option>
                      </select>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.empresa} id="divEmpresa">
              <h1>EMPRESA</h1>
              <div className={styles.divEmpresa}>
                <form>
                  <div>
                    Nome
                    <input type="text" name="companyName" placeholder="Nome" />
                  </div>
                  <div>
                    Website
                    <input type="text" name="website" placeholder="Website" />
                  </div>
                  <div>
                    País
                    <input type="text" name="country" placeholder="País" />
                  </div>
                  <div>
                    Estado
                    <input type="text" name="state" placeholder="Estado" />
                  </div>
                  <div>
                    Cidade
                    <input type="text" name="city" placeholder="Cidade" />
                  </div>
                  <div>
                    Bairro
                    <input type="text" name="neighborhood" placeholder="Bairro" />
                  </div>
                  <div>
                    Rua
                    <input type="text" name="street" placeholder="Rua" />
                  </div>
                  <div>
                    Número da Empresa
                    <input type="text" name="numCompany" placeholder="Número da Empresa" />
                  </div>
                  <div>
                    CEP
                    <input type="text" name="cep" placeholder="CEP" />
                  </div>
                  <div>
                    Número de Telefone
                    <input type="text" name="numberPhone" placeholder="Número de Telefone" />
                  </div>
                  <div className={styles.descricao}>
                    Descrição
                    <textarea name="description" placeholder="Descrição" ></textarea>
                  </div>
                </form>
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