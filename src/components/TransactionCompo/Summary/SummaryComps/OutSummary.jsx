import { useTransactions } from "../../../../../Context/TransactionContext";

function OutSummary() {
  const { authenticatedUser, formatCur } = useTransactions();
  const debit = authenticatedUser.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const formattedDebit = formatCur(
    debit,
    authenticatedUser.locale,
    authenticatedUser.currency
  );
  return (
    <>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">{formattedDebit}</p>
    </>
  );
}

export default OutSummary;
