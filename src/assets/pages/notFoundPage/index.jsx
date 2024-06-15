import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./NotFoundPage.module.css"

function Pagina404() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.notFound}>
                    <div className={styles.texto}>
                        <h1>Ops..</h1>
                        <p>A página não foi encontrada</p>
                    </div>
                    <img className={styles.img} src="../../../../public/img/NotFound/undraw_page_not_found_re_e9o6.svg" alt="" />
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Pagina404;