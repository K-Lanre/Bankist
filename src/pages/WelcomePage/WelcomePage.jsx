import Nav from "../../components/nav-compo/Nav";
import HomePage from "../../components/welcomeComponent/HomePage";
import Features from "../../components/featuresCompo/Features";
import Footer from "../../components/footerCompo/Footer";
import { motion } from "framer-motion";

function WelcomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Nav />
      <HomePage />
      <Features />
      <Footer />
    </motion.div>
  );
}

export default WelcomePage;
