import styles from "./logo.module.css";

function Logo() {
  return (
    <img
      src="img/logo.png"
      alt="Bankist logo"
      className={styles.nav__logo}
      id="logo"
    />
  );
}

export default Logo;
