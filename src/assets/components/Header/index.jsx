//import styles from "./Header.module.css"
import { StyledHeader } from "./styles"

function Header() {
    return (
        <StyledHeader>
                <span>LuisGabriel</span>
                <nav>
                    <a href="">Home</a>
                    <a href="">Sobre</a>
                    <a href="">Projetos</a>
                    <a href="">Contatos</a>
                </nav>
        </StyledHeader>
    )
}

export default Header;
