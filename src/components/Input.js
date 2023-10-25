import React from "react";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import * as Icons from "./Icons";
import Dropdown from "./Dropdown";
import Education from "./Education/Education";
import Experience from "./Experince/Experience";
import preset from "../preset/preset";

function Input() {
  const { portfolioDispatch } = useContext(AppContext);
  return (
    <div className="input-container">
      <div className="input-wrapper p-2 flex-row">
        <button
          className="text-red-900 hover:text-red-600"
          onClick={() => portfolioDispatch({ type: "CLEAR" })}
        >
          <Icons.Thrash size={"1x"} />
          Clear
        </button>
        <button
          className="bg-slate-200 hover:text-slate-500"
          onClick={() =>
            portfolioDispatch({ type: "USE_PRESET", value: preset })
          }
        >
          Load Preset
        </button>
      </div>
      <PersonalDetails />
      <Dropdown name="Education" icon={<Icons.Cap size={"sm"} />}>
        <Education />
      </Dropdown>
      <Dropdown name="Experience" icon={<Icons.Briefcase size={"sm"} />}>
        <Experience />
      </Dropdown>
    </div>
  );
}

export default Input;
