import { motion } from "framer-motion";

import Main from "../../components/Main";
import Movement from "../../components/TransactionCompo/Movement/Movement";
import Balance from "../../components/TransactionCompo/Balance/Balance";
import Summary from "../../components/TransactionCompo/Summary/Summary";
import Loan from "../../components/TransactionCompo/Operations/Loan";
import CloseAccount from "../../components/TransactionCompo/Operations/CloseAccount";
import Transfer from "../../components/TransactionCompo/Operations/Transfer";
import Timer from "../../components/TransactionCompo/Timer/Timer";
import Nav from "../../components/navCompo/Nav";
import Footer from "../../components/footerCompo/Footer";
import UserDetails from "../../components/UserDetails/UserDetails";
// import TransactionNav from "../../components/TransactionCompo/TransactionNav/TransactionNav";

function TransactionPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Nav />
      <UserDetails />
      {/* <TransactionNav /> */}
      <Main>
        <Balance />
        <Movement />
        <Summary />
        <Transfer />
        <Loan />
        <CloseAccount />
        <Timer />
      </Main>
      <Footer />
    </motion.div>
  );
}

export default TransactionPage;
