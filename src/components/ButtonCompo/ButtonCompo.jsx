import PropTypes from "prop-types";
import styles from "./ButtonCompo.module.css";
function ButtonCompo({ children, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

ButtonCompo.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
export default ButtonCompo;
