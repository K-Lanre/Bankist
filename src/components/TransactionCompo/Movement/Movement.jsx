// import { useEffect } from "react";
import { useTransactions } from "../../../../Context/TransactionContext";
import styles from "./Movement.module.css";

function formatCur(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
}

function formatMovementDate(date, locale) {
  const now = new Date();
  const daysPassed = Math.round(Math.abs(now - date) / (1000 * 60 * 60 * 24));

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
}
function Movement() {
  // const [sorted, setSorted] = useState(false);
  // const [movements, setMovements] = useState(authenticatedUser.movements);

  const { authenticatedUser } = useTransactions();

  const movements = authenticatedUser.movements;

  // useEffect(() => {
  //   const movs = sorted
  //     ? authenticatedUser.movements.slice().sort((a, b) => a - b)
  //     : authenticatedUser.movements;
  //   setMovements(movs);
  // }, [sorted, authenticatedUser.movements]);

  return (
    <div className={styles.movements}>
      {movements?.map((mov, index) => {
        const order = mov > 0 ? "deposit" : "withdrawal";
        const date = new Date(authenticatedUser.movementsDates[index]);

        const displayDate = formatMovementDate(date, authenticatedUser.locale);
        const formattedMov = formatCur(
          mov,
          authenticatedUser.locale,
          authenticatedUser.currency
        );

        return (
          <div className={styles.movements__row} key={index}>
            <div
              className={`${styles.movements__type} ${
                styles[`movements__type--${order}`]
              }`}
            >
              {index + 1}
              {order}
            </div>
            <div className={styles.movements__date}>{displayDate}</div>
            <div className={styles.movements__value}>{formattedMov}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Movement;
