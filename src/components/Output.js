import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import * as Icons from "./Icons";
import Education from "./output/Education";
import Experience from "./output/Experience";
import PersonalDetails from "./output/PersonalDetails";

function Output() {
  const { portfolioState } = useContext(AppContext);

  const { personalDetails, education, experience } = portfolioState;
  const detailsIsEmpty = Object.values(personalDetails).every((i) => !i);

  return (
    <div className="output">
      <div className="personal-details">
        {!detailsIsEmpty && (
          <PersonalDetails personalDetails={personalDetails} Icons={Icons} />
        )}
      </div>
      {!detailsIsEmpty && (
        <div className="additional-info">
          <div>
            <h1 className="bg-slate-200">Education</h1>
            <Education />
          </div>
          <div>
            <h1 className="bg-slate-200">Experience</h1>
            <Experience />
          </div>
        </div>
      )}
    </div>
  );
}

export default Output;
