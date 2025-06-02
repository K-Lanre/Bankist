import PropTypes from "prop-types";
import { useContext, useReducer } from "react";
import { createContext } from "react";
import accounts from "../User/User";

// import accounts from "../User/User";
const TransactionContext = createContext();

const initialState = {
  isLoggedIn: false,
  authenticatedUser: {},
  balance: 0,
  // accounts:accounts
};

function TransactionProvider({ children }) {
  const [{ isLoggedIn, authenticatedUser, balance }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function reducer(state, action) {
    switch (action.type) {
      // case for opening account and login by setting the payload to the authenticatedUser state
      case "OPEN_ACCOUNT": {
        const authenticatedUser = action.payload;
        const balance = authenticatedUser?.movements[0];
        // authenticatedUser?.movements?.reduce((acc, mov) => acc + mov, 0) ?? 0;
        return {
          ...state,
          isLoggedIn: true,
          authenticatedUser,
          balance,
        };
      }

      // case for login, setting the payload to the authenticatedUser state
      case "LOGIN": {
        const authenticatedUser = action.payload;
        const balance =
          authenticatedUser?.movements?.reduce((acc, mov) => acc + mov, 0) ?? 0;

        return {
          ...state,
          isLoggedIn: true,
          authenticatedUser,
          balance,
        };
      }

      // case for depositing money, by updating the state and spreading the amount and date to the arrays needed
      case "REQUEST_LOAN": {
        const amount = action.payload;
        const newDate = new Date().toISOString();
        return {
          ...state,
          balance: state.balance + amount,
          authenticatedUser: {
            ...state.authenticatedUser,
            movements: [...state.authenticatedUser.movements, amount],
            movementsDates: [
              ...(state.authenticatedUser.movementsDates || []),
              newDate,
            ],
          },
        };
      }
      //
      case "TRANSFER": {
        const { amount, date } = action.payload;

        return {
          ...state,
          balance: state.balance - amount,
          authenticatedUser: {
            ...state.authenticatedUser,
            movements: [...state.authenticatedUser.movements, -amount],
            movementsDates: [
              ...(state.authenticatedUser.movementsDates || []),
              date,
            ],
          },
        };
      }

      case "LOGOUT": {
        return {
          ...state,
          isLoggedIn: false,
          authenticatedUser: {},
          balance: 0,
        };
      }

      case "CLOSE_ACCOUNT": {
        return {
          ...state,
          isLoggedIn: false,
          authenticatedUser: {},
          balance: 0,
        };
      }

      default:
        return state;
    }
  }

  // The function that works for opening acct
  function openAccount(fullName, pin, currency) {
    if (!fullName || !pin || !currency) {
      throw new Error("All fields are required");
    }
    // Basic validation for full name
    const nameParts = fullName.trim().split(" ");
    if (nameParts.length < 2) {
      throw new Error("Please enter both first and last name");
    }

    // getting userName by using first letter of first name and first letter of last name
    const userName = `${nameParts[0].toLowerCase().slice(0, 1)}${nameParts[1]
      .toLowerCase()
      .slice(0, 1)}`;

    const initialBalance = 1000;
    const now = new Date().toISOString();

    // persist to mock DB
    const newAcct = {
      owner: fullName,
      userName,
      pin: Number(pin),
      movements: [initialBalance],
      movementsDates: [now],
      currency: currency,
      locale: navigator.language,
      avatar: "https://i.pravatar.cc/100?u=zz",
    };
    accounts.push(newAcct);

    // update state
    dispatch({ type: "OPEN_ACCOUNT", payload: newAcct });
    return newAcct;
  }

  function transferFund(receiverUsername, amount) {
    if (!receiverUsername || !amount) {
      throw new Error("User name does not exist");
    }

    const receiverAcct = accounts.find(
      (acct) => acct.userName === receiverUsername
    );
    const amt = Number(amount);

    // Basic validation
    if (
      receiverAcct &&
      receiverAcct.userName !== authenticatedUser.userName &&
      amt > 0 &&
      balance >= amt
    ) {
      // Step 1: Update receiver (simulate external update)
      receiverAcct.movements.push(amt);
      receiverAcct.movementsDates.push(new Date().toISOString());

      // Step 2: Dispatch transfer to update authenticated user
      dispatch({
        type: "TRANSFER",
        payload: {
          amount: amt,
          date: new Date().toISOString(),
        },
      });
    } else {
      throw new Error("You can't Funds to yourself");
    }
  }

  // function for login, currentUser gotten from mock DB through the "find method"
  function login(user, pin) {
    if (!user || !pin) {
      throw new Error("Username and PIN are required");
    }

    const currentUser = accounts.find((acct) => acct.userName === user);

    if (!currentUser) {
      throw new Error("User not found");
    }

    if (currentUser.pin !== Number(pin)) {
      throw new Error("Incorrect PIN");
    }

    dispatch({ type: "LOGIN", payload: currentUser });
  }
  function logout() {
    dispatch({ type: "LOGOUT" });
  }

  // function for request loan,
  function requestLoan(amount) {
    if (authenticatedUser) {
      dispatch({ type: "REQUEST_LOAN", payload: amount });
    }
  }
  function formatCur(value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(value);
  }

  function closeAccount(user, pin) {
    if (!user || !pin) {
      throw new Error("All fields are required");
    }

    if (
      authenticatedUser.userName === user &&
      authenticatedUser.pin === Number(pin)
    ) {
      const index = accounts.findIndex((acct) => acct.userName === user);
      if (index !== -1) {
        accounts.splice(index, 1); // ✅ delete valid account
      }
      dispatch({ type: "CLOSE_ACCOUNT" });
    } else {
      throw new Error("Your username or pin is incorrect");
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        isLoggedIn,
        authenticatedUser,
        balance,
        login,
        formatCur,
        requestLoan,
        transferFund,
        logout,
        closeAccount,
        openAccount,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

function useTransactions() {
  const context = useContext(TransactionContext);
  if (context === undefined) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
}

TransactionProvider.propTypes = {
  children: PropTypes.node,
};

export { TransactionProvider, useTransactions };
