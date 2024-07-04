import styles from "./page.module.css";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";

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
