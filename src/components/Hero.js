import styles from '../styles/Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Bienvenido a la mejor <br/> tienda de deportes</h1>
                <p className={styles.heroSubtitle}>Encuentra el equipo que necesitas para alcanzar tus metas.</p>
            </div>
        </section>
    );
}

