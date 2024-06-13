import { Link } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <div className="caixaLogo">
                <Link to="/"><img src="../../../../public/img/global/Logo_Site_Autismo.png" alt="Logo Includio" className={styles.logo} /></Link>
            </div>
            <div className={styles.caixaPerfil}>
                <Link to="" className={styles.perfil}>
                    <img src="../../../../public/img/global/gato.webp" alt="Foto de perfil" />
                    <p>Luis Gabriel</p>
                </Link>
            </div>
        </header>
    )
}

export default Header;
