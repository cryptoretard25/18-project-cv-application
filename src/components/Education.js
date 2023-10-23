import React from "react";
import * as Icons from './Icons'

function Education() {
  const educationInput = (
    <form>
      <div className="input-item">
        <label htmlFor="school">
          <h3>School</h3>
        </label>
        <input
          type="text"
          placeholder="Enter school / university"
          id="school"
          maxLength="19"
          value=""
          onChange={() => {}}
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
          value=""
          onChange={() => {}}
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
          value=""
          onChange={() => {}}
        />
      </div>
      <div className="input-item">
        <label htmlFor="startdate">
          <h3>Start Date</h3>
        </label>
        <input
          type="date"
          id="startdate"
          maxLength="19"
          value=""
          onChange={() => {}}
        />
      </div>
      <div className="input-item">
        <label htmlFor="enddate">
          <h3>End Date</h3>
        </label>
        <input
          type="date"
          id="enddate"
          maxLength="19"
          value=""
          onChange={() => {}}
        />
        <label className="flex w-full gap-2 justify-end items-center">
          <p>Present</p>
          <input type="checkbox" onChange={() => {}} />
        </label>
      </div>
      <div className="interface">
        <button className="text-base bg-slate-200">
          <Icons.Cancel size={"1x"} />
          Cancel
        </button>
        <button className="text-base bg-slate-200">
          <Icons.Thrash size={"1x"} />
          Delete
        </button>
        <button className="text-base bg-slate-200">
          <Icons.Save size={"lg"} />
          Save
        </button>
      </div>
    </form>
  );

  return (
    <>
      {educationInput}

    </>
  );
}

export default Education;
