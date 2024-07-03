import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Editar.module.css";
import { envioDados, rolarScroll } from "../../utils/Editar/editar.js";

function Perfil() {
  const [formData, setFormData] = useState({
    country: '',
    state: '',
    city: '',
    complement: '',
    cep: '',
    completeName: '',
    numberPhone: '',
    gender: '',
    jobTitle: '', 
    companyName: '',
    website: '',
    countryCompany: '',
    stateCompany: '',
    cityCompany: '',
    neighbordhood: '',
    street: '',
    numCompany: '',
    companyCep: '',
    numberPhoneCompany: '',
    description: '',
    photograph: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, photograph: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const email = () => {
    const contaResposta = JSON.parse(localStorage.getItem("accountResponse"));
    const conta = JSON.parse(contaResposta);

    return conta.email;
}

  useEffect(() => {
    window.addEventListener("scroll", rolarScroll);
    return () => {
      window.removeEventListener("scroll", rolarScroll);
    };
  }, []);

  const enviar = (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      console.log(key, " : ", formData[key])
      data.append(key, formData[key]);
    }
    console.log(email())
    data.append("email", email())
    envioDados(data);
  };

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
            <label htmlFor="foto" className={styles.fotoEdit}>
              Foto<br />
              <label htmlFor="photograph" className={styles.btnUpload}>Insira sua Foto</label>
              <input type="file" name="photograph" id="photograph" className={styles.credenciaisFile} accept="image/*" onChange={handleChange} />
            </label>
            <button className={styles.botaoPerfil} onClick={enviar}>Salvar</button>
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
                    <input type="text" name="country" placeholder="Pais" onChange={handleChange} />
                  </div>
                  <div>
                    Estado
                    <input type="text" name="state" placeholder="estado" onChange={handleChange} />
                  </div>
                  <div>
                    Cidade
                    <input type="text" name="city" placeholder="cidade" onChange={handleChange} />
                  </div>
                  <div>
                    Complemento
                    <input type="text" name="complement" placeholder="complemento" onChange={handleChange} />
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
                    <label htmlFor="completeName">
                      Nome Completo
                      <input type="text" name="completeName" placeholder="nome completo" onChange={handleChange} />
                    </label>
                  </div>
                  <label htmlFor="numberPhone">
                    <div>
                      Telefone
                      <input type="text" name="numberPhone" placeholder="numero telefone" onChange={handleChange} />
                    </div>
                  </label>
                  <div>
                    <label htmlFor="gender">
                      Genero
                      <select name="gender" id="genero" defaultValue="" className={styles.credenciais} onChange={handleChange}>
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
                    Cargo na empresa
                    <input type="text" name="jobTitle" placeholder="Cargo" onChange={handleChange} />
                  </div>
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
                    <input type="text" name="countryCompany" placeholder="País" onChange={handleChange} />
                  </div>
                  <div>
                    Estado
                    <input type="text" name="stateCompany" placeholder="Estado" onChange={handleChange} />
                  </div>
                  <div>
                    Cidade
                    <input type="text" name="cityCompany" placeholder="Cidade" onChange={handleChange} />
                  </div>
                  <div>
                    Bairro
                    <input type="text" name="neighbordhood" placeholder="Bairro" onChange={handleChange} />
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
                    <input type="text" name="numberPhoneCompany" placeholder="Número de Telefone" onChange={handleChange} />
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
