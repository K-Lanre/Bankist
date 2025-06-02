import styles from "./TransactionNav.module.css";
function TransactionNav() {
  return (
    <nav>
      <p className={styles.welcome}>Log in to get started</p>

      <img src="logo.png" alt="Logo" className={styles.logo} />
      <form className={styles.login}>
        <input
          type="text"
          placeholder="user"
          name="userName"
          className={`${styles.login__input} ${styles["login__input--user"]}`}
          maxLength="4"
        />
        {/* In practice, use type="password"  */}
        <input
          type="text"
          placeholder="PIN"
          maxLength="4"
          className={`${styles.login__input} ${styles["login__input--pin"]}`}
          name="pin"
        />
        <button className={styles.login__btn}>&rarr;</button>
      </form>
    </nav>
  );
}

export default TransactionNav;
