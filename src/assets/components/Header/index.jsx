import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <div className="caixaLogo">
                <img src="../../../../public/img/global/Logo_Site_Autismo.png" alt="Logo Includio" className={styles.logo} />
            </div>
        </header>
    )
}

export default Header;
