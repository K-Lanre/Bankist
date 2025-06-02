import { useNavigate } from "react-router-dom";
import { useTransactions } from "../../Context/TransactionContext";
import { useEffect } from "react";
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useTransactions();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/login", { replace: true });
  }, [isLoggedIn, navigate]);
  return isLoggedIn ? children : null;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
export default ProtectedRoute;
