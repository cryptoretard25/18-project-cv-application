import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import * as Icons from "./Icons";
import Education from "./output/Education";
import Experience from "./output/Experience";
import PersonalDetails from "./output/PersonalDetails";

function Output() {
  const { portfolioState, handlePrintRef } = useContext(AppContext);
  const { personalDetails, education, experience } = portfolioState;

  return (
    <div className="output" ref={handlePrintRef}>
      <div className="personal-details">
        <PersonalDetails personalDetails={personalDetails} Icons={Icons} />
      </div>
      <div className="additional-info">
        <div className="education-info">
          <h1 className="bg-slate-200 p-1">Education</h1>
          <Education />
        </div>
        <div className="experience-info">
          <h1 className="bg-slate-200 p-1">Professional Experience</h1>
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Output;
