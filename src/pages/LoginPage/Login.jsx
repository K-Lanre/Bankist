import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./Login.module.css";

import Nav from "../../components/nav-compo/Nav";
import Footer from "../../components/footer-compo/Footer";

import { useTransactions } from "../../../Context/TransactionContext";
import { useNavigate } from "react-router-dom";
import ButtonCompo from "../../components/button-compo/ButtonCompo";
import { toast } from "react-toastify";
function Login() {
  const [userName, setUserName] = useState("");
  const [pin, setPin] = useState("");

  const navigate = useNavigate();

  const { login, isLoggedIn } = useTransactions();

  function handleLogin(e) {
    try {
      e.preventDefault();
      login(userName, pin);
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(() => {
    if (isLoggedIn) navigate("/account", { replace: true });
  }, [isLoggedIn, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Nav />
      <div className={styles.modal}>
        <h2 className={styles.modal__header}>Log into your account</h2>
        <form className={styles.modal__form}>
          <label>User Name</label>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
          <label>Pin</label>
          <input type="text" onChange={(e) => setPin(e.target.value)} />

          <ButtonCompo onClick={handleLogin}>Next step &rarr;</ButtonCompo>
        </form>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Login;
