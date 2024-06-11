import { Link } from "react-router-dom"
import styles from "./Header.module.css"
//import { StyledHeader } from "./styles"

function Header() {
    return (
        //<StyledHeader>
        <header className={styles.header}>
            <Link to="/"><img src="../../../../public/img/global/Logo_Site_Autismo.png" alt="Logo Includio" className={styles.logo} /></Link>
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
                        <button className={styles.botao}>Sing Up</button>
                    </Link>
                </div>
            </nav>
        </header>
        //</StyledHeader>
    )
}

export default Header;
