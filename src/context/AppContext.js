import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const temp = {
  personalDetails: {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    address: "",
  },
  education: [],
  experience: [],
};

const initialPersonalDetails = {
  personalDetails: {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    address: "",
  },
  education: [
    {
      school: "High School",
      degree: "Middle Degree",
      location: "Russia, Ivanovo",
      startDate: "2012-09-01",
      endDate: "2015-07-01",
    },
    {
      school: "Moscow state university",
      degree: "High Degree",
      location: "Russia, Moscow",
      startDate: "2015-09-01",
      endDate: "Present",
    },
  ],
  experience: [],
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
    case 'EDUCATION':
      return {...currState, education: [
        ...currState.education,
        action.value
      ]}
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
