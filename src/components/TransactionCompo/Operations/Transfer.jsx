import { useState } from "react";
import { useTransactions } from "../../../../Context/TransactionContext";
import { toast } from "react-toastify";

function Transfer() {
  const [transferUser, setTransferUser] = useState("");
  const [amount, setAmount] = useState("");
  const { transferFund } = useTransactions();

  function handleTransfer(e) {
    try {
      e.preventDefault();
      transferFund(transferUser, amount);
      setTransferUser("");
      setAmount("");
      toast.success("Transfer successful");
      console.log(transferUser, amount);
    } catch (error) {
      toast.error(error.message);
      setTransferUser("");
      setAmount("");
    }
  }
  return (
    <div className="operation operation--transfer">
      <h2>Transfer money</h2>
      <form className="form form--transfer">
        <input
          type="text"
          className="form__input form__input--to"
          value={transferUser}
          onChange={(e) => setTransferUser(e.target.value)}
        />
        <input
          type="number"
          className="form__input form__input--amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="form__btn form__btn--transfer"
          onClick={handleTransfer}
        >
          &rarr;
        </button>
        <label className="form__label">Transfer to</label>
        <label className="form__label">Amount</label>
      </form>
    </div>
  );
}

export default Transfer;
