import { useEffect } from "react";
import styles from "./Alert.module.css";

function Alert({ msg, duracao = 3000, limpar }) {

    useEffect(() => {
        if (msg) {
            const timer = setTimeout(() => {
                limpar();
            }, duracao);
            return () => clearTimeout(timer);
        }
    }, [msg, duracao, limpar]);

    return (
        msg ? (
            <div className={styles.erro} id="erro">
                <i className="bi bi-exclamation-triangle-fill"></i>
                {msg}
            </div>
        ) : null
    );
}

export default Alert;