import styles from "./Header.module.css"
//import { StyledHeader } from "./styles"

function Header() {
    return (
        //<StyledHeader>
        <header className={styles.header}>
            <a href="index.html"><img src="../../../../public/img/global/Logo_Site_Autismo.png" alt="Logo Includio" className={styles.logo}/></a>
            <nav className={styles.navegacao}>
                <a href="" className={styles.link}>Sobre</a>
                <a href="" className={styles.link}>Entenda Sobre o Autismo</a>
            </nav>
            <div className={styles.divBotoes}>
                <button className={styles.botao} onClick={() => window.location.href='./assets/pages/global/login.html'}>Login</button>
                <button className={styles.botao} onClick={() => window.location.href='./assets/pages/global/registroInicial.html'}>Sing Up</button>
            </div>
        </header>
        //</StyledHeader>
    )
}

export default Header;
