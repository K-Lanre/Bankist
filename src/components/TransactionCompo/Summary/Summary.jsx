import styles from "./Summary.module.css";
import InSummary from "./SummaryComps/InSummary";
import Intrest from "./SummaryComps/Intrest";
// import InSummary from "./SummaryComps/Intrest";
import OutSummary from "./SummaryComps/OutSummary";
import Sort from "./SummaryComps/Sort";

function Summary() {
  return (
    <div className={styles.summary}>
      {/* <InSummary /> */}
      <InSummary />
      <OutSummary />
      <Intrest />
      <Sort />
    </div>
  );
}

export default Summary;
