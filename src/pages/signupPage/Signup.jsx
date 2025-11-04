import { useState } from "react";
import styles from "./signup.module.css";
import { useTransactions } from "../../../Context/TransactionContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../../components/nav-compo/Nav";
import Footer from "../../components/footer-compo/Footer";
import ButtonCompo from "../../components/button-compo/ButtonCompo";
function Signup() {
  const [fullName, setFullName] = useState("");
  const [pin, setPin] = useState("");
  const [currency, setCurrency] = useState("");

  const { openAccount } = useTransactions();
  const navigate = useNavigate();

  function signupUser(e) {
    e.preventDefault();
    try {
      const newUser = openAccount(fullName, pin, currency);

      toast.success(
        `Account created successfully! Your username is ${newUser.userName} and your PIN is ${newUser.pin}`
      );

      navigate("/account", { state: { newUser: true } });
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <>
      <Nav />
      <div className={styles.modal}>
        <h2 className={styles.modal__header}>Log into your account</h2>
        <form className={styles.modal__form}>
          <label>Full Name</label>
          <input type="text" onChange={(e) => setFullName(e.target.value)} />

          <label>Pin</label>
          <input type="number" onChange={(e) => setPin(e.target.value)} />

          <label>Currency</label>
          <select onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="NGN">NGN</option>
          </select>

          <ButtonCompo onClick={signupUser}>Next step &rarr;</ButtonCompo>
        </form>
        ;
      </div>
      <Footer />
    </>
  );
}

export default Signup;
