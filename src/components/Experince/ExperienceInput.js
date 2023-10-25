import React from 'react'

function ExperienceInput({experience, setExperience, experienceInputHandler}) {
  return (
    <>
      {/* Company */}
      <div className="input-item">
        <label htmlFor="company">
          <h3>Company Name</h3>
        </label>
        <input
          type="text"
          placeholder="Enter company name"
          id="company"
          maxLength="40"
          value={experience.company}
          onChange={experienceInputHandler}
        />
      </div>
      {/* Position */}
      <div className="input-item">
        <label htmlFor="position">
          <h3>Position title</h3>
        </label>
        <input
          type="text"
          placeholder="Enter position title"
          id="position"
          maxLength="40"
          value={experience.position}
          onChange={experienceInputHandler}
        />
      </div>
      {/* Location */}
      <div className="input-item">
        <label htmlFor="location">
          <h3>Location</h3>
        </label>
        <input
          type="text"
          placeholder="Enter location"
          id="location"
          maxLength="40"
          value={experience.location}
          onChange={experienceInputHandler}
        />
      </div>
      {/* Dates */}
      <div className="flex" style={{ marginBottom: "-18px", zIndex: '10' }}>
        {/* Start date */}
        <div className="input-item">
          <label htmlFor="startDate">
            {" "}
            <h3>Start Date</h3>{" "}
          </label>
          <input
            type="date"
            id="startDate"
            maxLength="12"
            value={experience.startDate}
            onChange={experienceInputHandler}
          />
        </div>
        {/* End date */}
        <div className="input-item">
          <label htmlFor="endDate">
            <h3>End Date</h3>
          </label>
          <input
            type={experience.endDate !== "Present" ? "date" : "text"}
            id="endDate"
            maxLength="19"
            value={experience.endDate}
            onChange={experienceInputHandler}
          />
          <label className="flex w-full gap-1 justify-end items-center text-l">
            <p>Present</p>
            <input
              type="checkbox"
              id="endDate"
              onChange={(e) => {
                experience.endDate !== "Present"
                  ? setExperience({ ...experience, [e.target.id]: "Present" })
                  : setExperience({ ...experience, [e.target.id]: "" });
              }}
              checked={experience.endDate === "Present"}
            />
          </label>
        </div>
      </div>
      {/* Description */}
      <div className="input-item">
        <label htmlFor="description">
          <h3>Description</h3>
        </label>
        <textarea
          placeholder="Enter description"
          id="description"
          maxLength="500"
          value={experience.description}
          onChange={experienceInputHandler}
        />
      </div>
    </>
  );
}

export default ExperienceInput