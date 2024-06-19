import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Editar.module.css";
import { rolarScroll } from "../../utils/Editar/editar.js";

function Perfil() {
  const [formData, setFormData] = useState({
    pais: '',
    estado: '',
    cidade: '',
    complemento: '',
    cep: '',
    nomeCompleto: '',
    telefone: '',
    genero: '',
    companyName: '',
    website: '',
    country: '',
    state: '',
    city: '',
    neighborhood: '',
    street: '',
    numCompany: '',
    companyCep: '',
    numberPhone: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("API", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Dados atualizados com sucesso!');
      } else {
        alert('Erro ao atualizar dados.');
      }
    } catch (error) {
      alert('Erro ao atualizar dados.');
    }
  };
  
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
    window.addEventListener("scroll", rolarScroll);
    return () => {
      window.removeEventListener("scroll", rolarScroll);
    };
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
            <button className={styles.botaoPerfil} onClick={handleSubmit}>Salvar</button>
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
                    <input type="text" name="pais" placeholder="Pais" onChange={handleChange} />
                  </div>
                  <div>
                    Estado
                    <input type="text" name="estado" placeholder="estado" onChange={handleChange} />
                  </div>
                  <div>
                    Cidade
                    <input type="text" name="cidade" placeholder="cidade" onChange={handleChange} />
                  </div>
                  <div>
                    Complemento
                    <input type="text" name="complemento" placeholder="complemento" onChange={handleChange} />
                  </div>
                  <div>
                    CEP
                    <input type="text" name="cep" placeholder="cep" onChange={handleChange} />
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.pessoais}>
              <h1>DADOS PESSOAIS</h1>
              <div className={styles.divPessoais} id="divPessoais">
                <form>
                  <div>
                    <label htmlFor="nomeCompleto">
                      Nome Completo
                      <input type="text" name="nomeCompleto" placeholder="nome completo" onChange={handleChange} />
                    </label>
                  </div>
                  <label htmlFor="telefone">
                    <div>
                      Telefone
                      <input type="text" name="telefone" placeholder="numero telefone" onChange={handleChange} />
                    </div>
                  </label>
                  <div>
                    <label htmlFor="genero">
                      Genero
                      <select name="genero" id="genero" defaultValue="" className={styles.credenciais} onChange={handleChange}>
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
                    <input type="text" name="companyName" placeholder="Nome" onChange={handleChange} />
                  </div>
                  <div>
                    Website
                    <input type="text" name="website" placeholder="Website" onChange={handleChange} />
                  </div>
                  <div>
                    País
                    <input type="text" name="country" placeholder="País" onChange={handleChange} />
                  </div>
                  <div>
                    Estado
                    <input type="text" name="state" placeholder="Estado" onChange={handleChange} />
                  </div>
                  <div>
                    Cidade
                    <input type="text" name="city" placeholder="Cidade" onChange={handleChange} />
                  </div>
                  <div>
                    Bairro
                    <input type="text" name="neighborhood" placeholder="Bairro" onChange={handleChange} />
                  </div>
                  <div>
                    Rua
                    <input type="text" name="street" placeholder="Rua" onChange={handleChange} />
                  </div>
                  <div>
                    Número da Empresa
                    <input type="text" name="numCompany" placeholder="Número da Empresa" onChange={handleChange} />
                  </div>
                  <div>
                    CEP
                    <input type="text" name="companyCep" placeholder="CEP" onChange={handleChange} />
                  </div>
                  <div>
                    Número de Telefone
                    <input type="text" name="numberPhone" placeholder="Número de Telefone" onChange={handleChange} />
                  </div>
                  <div className={styles.descricao}>
                    Descrição
                    <textarea name="description" placeholder="Descrição" onChange={handleChange}></textarea>
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