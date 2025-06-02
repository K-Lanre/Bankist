import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "../../../../Context/TransactionContext";
import { toast } from "react-toastify";

function CloseAccount() {
  const [confirmUser, setConfirmUser] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const { closeAccount } = useTransactions();
  const navigate = useNavigate();

  function handleClose(e) {
    try {
      e.preventDefault();
      closeAccount(confirmUser, confirmPin);
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error.message);
      setConfirmPin("");
      setConfirmUser("");
    }

    // console.log(confirmUser, confirmPin);
  }

  return (
    <div className="operation operation--close">
      <h2>Close account</h2>
      <form className="form form--close">
        <input
          type="text"
          className="form__input form__input--user"
          value={confirmUser}
          onChange={(e) => setConfirmUser(e.target.value)}
        />
        <input
          type="password"
          maxLength="6"
          className="form__input form__input--pin"
          value={confirmPin}
          onChange={(e) => setConfirmPin(e.target.value)}
        />
        <button className="form__btn form__btn--close" onClick={handleClose}>
          &rarr;
        </button>
        <label className="form__label">Confirm user</label>
        <label className="form__label">Confirm PIN</label>
      </form>
    </div>
  );
}

export default CloseAccount;
