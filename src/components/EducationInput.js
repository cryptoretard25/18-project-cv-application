import React from "react";

function inputStateInput({ inputState, inputHandler, setInputState }) {
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
          maxLength="50"
          value={inputState.school}
          onChange={inputHandler}
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
          maxLength="50"
          value={inputState.degree}
          onChange={inputHandler}
        />
      </div>
      <div className="input-item">
        <label htmlFor="location">
          <h3>Location</h3>
        </label>
        <input
          type="text"
          id="location"
          maxLength="40"
          placeholder="Enter Location"
          value={inputState.location}
          onChange={inputHandler}
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
            value={inputState.startDate}
            onChange={inputHandler}
          />
        </div>
        <div className="input-item">
          <label htmlFor="endDate">
            <h3>End Date</h3>
          </label>
          <input
            type={inputState.endDate !== "Present" ? "date" : "text"}
            id="endDate"
            maxLength="19"
            value={inputState.endDate}
            onChange={inputHandler}
          />
          <label className="flex w-full gap-2 justify-end items-center">
            <p>Present</p>
            <input
              type="checkbox"
              id="endDate"
              onChange={(e) => {
                inputState.endDate !== "Present"
                  ? setInputState({ ...inputState, [e.target.id]: "Present" })
                  : setInputState({ ...inputState, [e.target.id]: "" });
              }}
              checked={inputState.endDate === "Present"}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default inputStateInput;
