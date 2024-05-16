import styles from "./page.module.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation/>
      <section className={styles.section}>
      </section>

      <section className={styles.section}>
        <hr style={{color: "black", width: "100vw"}}/>
      </section>

      <Footer/>
    </main>
  );
}
