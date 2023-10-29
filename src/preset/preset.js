import { v4 as uuidv4 } from "uuid";

const preset = {
  personalDetails: {
    firstname: "Ben",
    lastname: "Johnes",
    email: "benjones111@gmail.com",
    phone: ["+", "44", "-", "(", "3245", ")", "-", "55215521"],
    address: "London, United Kingdom",
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

export default preset;
