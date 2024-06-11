import styles from "./Header.module.css"
//import { StyledHeader } from "./styles"

function Header() {
    return (
        //<StyledHeader>
        <header className={styles.header}>
            <a href="index.html"><img src="./assets/img/global/Logo_Site_Autismo.png" alt="Logo Includio" id="logo"/></a>
            <div id="divBotoes">
                <button class="botao" onclick="window.location.href='./assets/pages/global/login.html'">Login</button>
                <button class="botao" onclick="window.location.href='./assets/pages/global/registroInicial.html'">Sing Up</button>
            </div>
        </header>
        //</StyledHeader>
    )
}

export default Header;
