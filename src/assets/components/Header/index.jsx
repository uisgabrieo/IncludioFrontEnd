import { Link } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/"><img src="../../../../public/img/global/Logo_Site_Autismo.png" alt="Logo Includio" className={styles.logo} /></Link>
        </header>
    )
}

export default Header;
