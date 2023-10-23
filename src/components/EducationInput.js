import React from "react";

function EducationInput({ education, educationInputHandler, setEducation }) {
  return (
    <>
      <div className="input-item">
        <label htmlFor="school">
          <h3>School</h3>
        </label>
        <input
          type="text"
          placeholder="Enter school / university"
          id="school"
          maxLength="19"
          value={education.school}
          onChange={educationInputHandler}
        />
      </div>
      <div className="input-item">
        <label htmlFor="degree">
          <h3>Degree</h3>
        </label>
        <input
          type="text"
          placeholder="Enter deegree / Field of Study"
          id="degree"
          maxLength="19"
          value={education.degree}
          onChange={educationInputHandler}
        />
      </div>
      <div className="input-item">
        <label htmlFor="location">
          <h3>Location</h3>
        </label>
        <input
          type="text"
          id="location"
          maxLength="19"
          placeholder="Enter Location"
          value={education.location}
          onChange={educationInputHandler}
        />
      </div>
      <div className="flex">
        <div className="input-item">
          <label htmlFor="startDate">
            <h3>Start Date</h3>
          </label>
          <input
            type="date"
            id="startDate"
            maxLength="19"
            value={education.startDate}
            onChange={educationInputHandler}
          />
        </div>
        <div className="input-item">
          <label htmlFor="endDate">
            <h3>End Date</h3>
          </label>
          <input
            type={education.endDate !== "Present" ? "date" : "text"}
            id="endDate"
            maxLength="19"
            value={education.endDate}
            onChange={educationInputHandler}
          />
          <label className="flex w-full gap-2 justify-end items-center">
            <p>Present</p>
            <input
              type="checkbox"
              id="endDate"
              onChange={(e) => {
                education.endDate !== "Present"
                  ? setEducation({ ...education, [e.target.id]: "Present" })
                  : setEducation({ ...education, [e.target.id]: "" });
              }}
              checked={education.endDate === "Present"}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default EducationInput;
