import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__nav}>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            About
          </a>
        </li>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            Pricing
          </a>
        </li>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            Terms of Use
          </a>
        </li>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            Privacy Policy
          </a>
        </li>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            Careers
          </a>
        </li>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            Blog
          </a>
        </li>
        <li className={styles.footer__item}>
          <a className={styles.footer__link} href="#">
            Contact Us
          </a>
        </li>
      </ul>
      <img src="img/icon.png" alt="Logo" className={styles.footer__logo} />
      <p className={styles.footer__copyright}>
        &copy; Copyright by
        <a
          className={`${styles.footer__link} ${styles["twitter-link"]}`}
          href="https://twitter.com/jonasschmedtman"
        >
          Jonas Schmedtmann
        </a>
        . Use for learning or your portfolio. Don&apos;t use to teach.
        Don&apos;t claim as your own product.
      </p>
    </footer>
  );
}

export default Footer;
