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
  education: [],
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
    case "ADD_EDUCATION":
      return {
        ...currState,
        education: [...currState.education, action.value],
      };
    case "EDIT_EDUCATION":
      return {
        ...currState,
        education: currState.education.map(item => item.uid === action.uid? {...action.value}: item)
      };
    case "REMOVE_EDUCATION":
      return {...currState, education: [...currState.education.filter(item=> item.uid !== action.uid)]}
    case "ADD_EXPERIENCE":
      return {
        ...currState,
        experience: [...currState.experience, action.value]
      }
    case "EDIT_EXPERIENCE":
      return {
        ...currState, 
        experience: currState.experience.map(item => item.uid===action.uid? {...action.value}: item)
      }
    case "REMOVE_EXPERIENCE":
      return {...currState, experience: [...currState.experience.filter(item => item.uid !== action.uid)]}
    case "CLEAR":
      return initialPersonalDetails;
    case "USE_PRESET":
      return {...action.value}
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
