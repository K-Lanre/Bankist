// import { useEffect, useState } from "react";
// import { useTransactions } from "../../../../Context/TransactionContext";
import styles from "./Timer.module.css";
// import { useNavigate } from "react-router-dom";
function Timer() {
  // const [logoutTimer, setLogoutTimer] = useState(300);
  // const { logout } = useTransactions();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (logoutTimer <= 0) {
  //     logout();
  //     navigate("/login", { replace: true });
  //   }
  //   const timer = setInterval(() => {
  //     setLogoutTimer((prev) => prev - 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [logoutTimer, logout, navigate]);

  // const minutes = String(Math.floor(logoutTimer / 60)).padStart(2, "0");
  // const seconds = String(logoutTimer % 60).padStart(2, "0");
  return (
    <p className={styles["logout-timer"]}>
      You will be logged out in{" "}
      {/* <span className={styles.timer}>
        {minutes}:{seconds}
      </span> */}
    </p>
  );
}

export default Timer;
