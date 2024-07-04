import styles from './Footer.module.css'

export default function Footer() {
    return (
    <footer className={styles.footer}>
        <div className={styles.one}>
          <div className={styles.vl}>
            <ul className={styles.footerList}>
              <li><a href="mailto:christinafit@orange.fr">Contact</a></li>
            </ul>  
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.vl}></div>
        </div>
        <div className={styles.copyright}>
          <p>Issoupe Inc.©</p>
        </div>
    </footer>
    )
}