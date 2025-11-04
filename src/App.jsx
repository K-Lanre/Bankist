// import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Login from "./pages/LoginPage/Login";
import TransactionPage from "./pages/TransactionPage/TransactionPage";
import accounts from "../User/User";
import { TransactionProvider } from "../Context/TransactionContext";
import "./index.css";

import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./pages/ProtectedRoute";
import Signup from "./pages/signupPage/Signup";
// import WelcomePage from "./pages/WelcomePage/WelcomePage";
console.log(accounts);

function App() {
  return (
    <TransactionProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <TransactionPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
          <ToastContainer position="top-right" autoClose={5000} />
        </AnimatePresence>
      </BrowserRouter>
    </TransactionProvider>
  );
}

export default App;
