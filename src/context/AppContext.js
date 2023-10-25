import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

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
      school: "London City University",
      degree: "Bachelors in Economics",
      location: "London, UK",
      startDate: "2012-09-01",
      endDate: "2018-07-01",
      uid: uuidv4(),
    },
    {
      school: "Moscow state university",
      degree: "High Degree",
      location: "Russia, Moscow",
      startDate: "2018-09-01",
      endDate: "Present",
      uid: uuidv4(),
    },
  ],
  experience: [
    {
      company: "Umbrella Inc.",
      position: "UX & UI Designer",
      location: "New York City, US",
      startDate: "2012-09-01",
      endDate: "2015-07-01",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
      uid: uuidv4(),
    },
    {
      company: "Black Mesa Labs",
      position: "UX Research Assistant",
      location: "Berlin, Germany",
      startDate: "2018-09-01",
      endDate: "Present",
      description:
        "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
      uid: uuidv4(),
    },
  ],
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
        education: currState.education.map((item)=>{
          return item.uid === action.uid? {...action.value}: item
        })
      };
    case "REMOVE_EDUCATION":
      return {...currState, education: [...currState.education.filter(item=> item.uid !== action.uid)]}
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
