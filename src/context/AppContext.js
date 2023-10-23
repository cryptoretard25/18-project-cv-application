import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const initialPersonalDetails = {
  personalDetails: {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    address: "",
  },
  education: {},
  experience: {}
};

const reducer = (currState, action) => {
  switch (action.type) {
    case "firstname":
    case "lastname":
    case "email":
    case "phonenumber":
    case "address":
      return {
        ...currState,
        personalDetails: {
          ...currState.personalDetails,
          [action.type]: action.value,
        },
      };
    case "CLEAR":
      return initialPersonalDetails;
    default:
      return currState;
  }
};

export const AppContextProvider = ({ children }) => {
  const [portfolioState, portfolioDispatch] = useReducer(
    reducer,
    initialPersonalDetails
  );

  useEffect(() => {
    console.log(portfolioState);
  }, [portfolioState]);

  return (
    <AppContext.Provider value={{ portfolioState, portfolioDispatch }}>
      {children}
    </AppContext.Provider>
  );
};
