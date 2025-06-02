import { useTransactions } from "../../../../../Context/TransactionContext";

function InSummary() {
  const { authenticatedUser, formatCur } = useTransactions();

  console.log(authenticatedUser);

  const credit = authenticatedUser.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const formattedCredit = formatCur(
    credit,
    authenticatedUser.locale,
    authenticatedUser.currency
  );
  console.log(credit);

  return (
    <>
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">{formattedCredit}</p>
    </>
  );
}

export default InSummary;
