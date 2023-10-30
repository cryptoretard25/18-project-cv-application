import { v4 as uuidv4 } from "uuid";

const preset = {
  personalDetails: {
    firstname: "James",
    lastname: "Conlan",
    email: "jamesconlan1@gmail.com",
    phone: ["+", "44", "-", "(", "3245", ")", "-", "55215521"],
    address: "Wexford, USA",
  },
  education: [
    {
      school: "University of Pennsylvania",
      degree: "History and Philosophy of Science and Technology",
      location: "Philadelphia, USA",
      startDate: "2011-09-01",
      endDate: "2016-07-01",
      uid: uuidv4(),
    },
    {
      school: "University of Baltimore",
      degree: "History",
      location: "Baltimore, USA",
      startDate: "2016-09-01",
      endDate: "2019-07-01",
      uid: uuidv4(),
    },
  ],
  experience: [
    {
      company: "Downtintown STEAM Academy",
      position: "History Teacher",
      location: "Philadelphia, USA",
      startDate: "2011-01-01",
      endDate: "2015-01-01",
      description:
        "Employed appropriate teaching methods to cater to individual education needs of each student. Provided advice and guidance to students needing morale-boosting and academic advising. Prepared various classroom activities and assessment methods to promote retention of study materials.",
      uid: uuidv4(),
    },
    {
      company: "University of Pennsylvania",
      position: "Assistant Professor",
      location: "Philadelphia, USA",
      startDate: "2015-01-01",
      endDate: "2021-01-01",
      description:
        "Used variety of learning modalities and support materials to facilitate learning process and accentuate presentations, including visual, aural and social learning modalities. Collaborated with colleagues on curriculum revision, evaluation of course syllabi and lesson plans for History curriculum. Handled classroom administration for professonrs, including taking attendance and recording student progress.",
      uid: uuidv4(),
    },
    {
      company: "University of Pennsylvania",
      position: "Professor",
      location: "Philadelphia, USA",
      startDate: "2021-01-01",
      endDate: "Present",
      description:
        "Graded quizzes, tests, homework and projects to provide students with timely academic progress information and feedback. Shifted between informal and formal methods of teaching to create multi-layered web of learning, incorporating experiments, practical activities, discussions and projects into lessons. Assisted and identified at-risk students to eliminate student barriers to learning.",
      uid: uuidv4(),
    },
  ],
};

export default preset;
