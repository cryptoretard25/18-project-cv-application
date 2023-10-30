import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import * as Icons from "./Icons";
import Education from "./output/Education";
import Experience from "./output/Experience";
import PersonalDetails from "./output/PersonalDetails";
import { isEmpty } from "../preset/utils";

function Output() {
  const { portfolioState, handlePrintRef } = useContext(AppContext);
  const { personalDetails, education, experience } = portfolioState;
  
  const [educationIsEmpty, setEducationIsEmpty] = useState(true)
  const [experienceIsEmpty, setExperienceIsEmpty] = useState(true);

  useEffect(() => {
    setEducationIsEmpty(isEmpty(education));
    setExperienceIsEmpty(isEmpty(experience));
  }, [portfolioState]);

  return (
    <div className="output" ref={handlePrintRef}>
      <div className="personal-details">
        <PersonalDetails personalDetails={personalDetails} Icons={Icons} />
      </div>
      <div className="additional-info">
        {!educationIsEmpty && (
          <div className="education-info">
            <h1 className="bg-slate-200 p-1">Education</h1>
            {education.map((item, _i)=>{
              return <Education education={item} key={_i}/>
            })}
          </div>
        )}
        {!experienceIsEmpty && (
          <div className="experience-info">
            <h1 className="bg-slate-200 p-1">Professional Experience</h1>
            {experience.map((item, _i)=>{
              return <Experience experience={item} key={_i} />
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Output;
