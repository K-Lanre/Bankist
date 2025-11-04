import styles from "./Logo.module.css";

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
