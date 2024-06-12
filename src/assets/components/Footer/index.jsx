import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <i class={`bi bi-card-text ${styles.icones}`}></i>
            <i class={`bi bi-c-circle ${styles.icones}`}></i>
            <Link to="/"><img src="/img/global/Logo_Site_Autismo.png" alt="Logo Includio" className={styles.logo} /></Link>
            
        </footer>
    )
}

export default Footer;