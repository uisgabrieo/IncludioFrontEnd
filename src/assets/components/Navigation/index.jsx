import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation({ onToggleTheme }) {
    return (
        <>
            <nav id="navMenu" className={styles.menu}>
                <Link to="/home" className={styles.navegacaoMenu}>Home</Link>
                <Link to="/home/perfil" className={styles.navegacaoMenu}>Perfil</Link>
                <Link to="/home/busca" className={styles.navegacaoMenu}>Buscar</Link>
                <Link to="/home/bug" id={styles.paginaAtual} className={styles.navegacaoMenu}>Relatar Bug</Link>
                <i className={`bi bi-moon-fill ${styles.navegacaoMenu}`} onClick={onToggleTheme}></i>
            </nav>
        </>
    );
}

export default Navigation;
