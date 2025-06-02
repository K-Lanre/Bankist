import { useTransactions } from "../../../../../Context/TransactionContext";

function Intrest() {
  const { authenticatedUser, formatCur } = useTransactions();
  const interest = authenticatedUser.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * authenticatedUser.interestRate) / 100)
    .filter((int) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  const formattedInterest = formatCur(
    interest,
    authenticatedUser.locale,
    authenticatedUser.currency
  );
  //  account.movements
  //   .filter(el => el > 0)
  //   .map(deposit => (deposit * account.interestRate) / 100)
  //   .filter((int, i, arr) => {
  //     return int >= 1;
  //   })
  //   .reduce((acc, int) => acc + int, 0);
  return (
    <>
      <p className="summary__label">Intrest</p>
      <p className="summary__value summary__value--interest">
        {formattedInterest}
      </p>
    </>
  );
}

export default Intrest;
