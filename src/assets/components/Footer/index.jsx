import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.icones}>
                <i className="bi bi-linkedin" id={styles.linkedin}></i>
                <i className="bi bi-instagram" id={styles.instagram}></i>
            </div>
            <div className={styles.mensagem}>
                <p>© 2024 INCLUDIO</p>
            </div>
        </footer>
    )
}

export default Footer;