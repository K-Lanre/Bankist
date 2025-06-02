import { useTransactions } from "../../../../Context/TransactionContext";
import styles from "./Balance.module.css";

function Balance() {
  const { authenticatedUser, balance, formatCur } = useTransactions();
  // Step 1: Compute balance

  // Step 2: Format it
  const formattedBalance = formatCur(
    balance,
    authenticatedUser?.locale || "en-US",
    authenticatedUser?.currency || "USD"
  );

  return (
    <div className={styles.balance}>
      <div>
        <p className={styles.balance__label}>Current balance</p>
        <p className={styles.balance__date}>
          As of{" "}
          <span className={styles.date}>{new Date().toLocaleDateString()}</span>
        </p>
      </div>
      <p className={styles.balance__value}>{formattedBalance}</p>
    </div>
  );
}

export default Balance;
