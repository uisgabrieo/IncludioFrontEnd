import styles from "./Button.module.css";

function Button({ textButton }) {
    return(
        <>
            <button className={styles.botao}>{ textButton }</button>
        </>
    )
}

export default Button;