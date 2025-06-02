import { useState } from "react";
import { useTransactions } from "../../../../Context/TransactionContext";

function Loan() {
  const [loanAmount, setLoanAmount] = useState("");
  const { requestLoan } = useTransactions();

  function handleLoan(e) {
    e.preventDefault();
    if (!loanAmount || loanAmount <= 0) return;
    requestLoan(Number(loanAmount));
    setLoanAmount(0);
    console.log(loanAmount);
  }

  return (
    <div className="operation operation--loan">
      <h2>Request loan</h2>
      <form className="form form--loan">
        <input
          type="number"
          className="form__input form__input--loan-amount"
          onChange={(e) => {
            setLoanAmount(e.target.value);
          }}
        />
        <button className="form__btn form__btn--loan" onClick={handleLoan}>
          &rarr;
        </button>
        <label className="form__label form__label--loan">Amount</label>
      </form>
    </div>
  );
}

export default Loan;
