import { Link } from "react-router-dom";
import Logo from "./logo";
import styles from "./Nav.module.css";
import { useTransactions } from "../../../Context/TransactionContext";
function Nav() {
  const { isLoggedIn } = useTransactions();
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.nav__links}>
        <li className={styles.nav__item}>
          <Link to="/" className={styles.nav__link}>
            Home
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/account" className={styles.nav__link}>
            Account
          </Link>
        </li>

        {!isLoggedIn && (
          <>
            {" "}
            <li className={styles.nav__item}>
              <Link
                to="/login"
                className={`${styles.nav__link} ${styles["nav__link--btn"]}`}
              >
                Login
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link
                to="/signup"
                className={`${styles.nav__link} ${styles["nav__link--btn"]}`}
              >
                Open Account
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
