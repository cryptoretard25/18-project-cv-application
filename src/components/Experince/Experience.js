import React from "react";
import * as Icons from "../Icons";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useState } from "react";
import ExperienceItem from "../../classes/ExperienceItem";
import ExperienceInput from "./ExperienceInput";
import ExperienceItemCollapsed from "./ExperienceItemCollapsed";

const emptyExperience = () => new ExperienceItem();

function Experience({ showInput, setShowInput, setError }) {
  const { portfolioState, portfolioDispatch } = useContext(AppContext);
  const [experience, setExperience] = useState(emptyExperience());

  const showInputHandler = () => setShowInput(!showInput);

  const experienceInputHandler = (e) => {
    const type = e.target.id;
    setExperience({ ...experience, [type]: e.target.value });
  };

  const saveButtonHandler = (e) => {
    e.preventDefault();
  };

  const cancelButtonHandler = (e) => {
    e.preventDefault();
    setExperience(emptyExperience());
    showInputHandler();
  };

  const experienceInput = (
    <form>
      <ExperienceInput experience={experience} setExperience={setExperience} experienceInputHandler={experienceInputHandler}/>
      {/* Interface */}
      <div className="interface">
        <button
          className="text-base bg-slate-200 hover:bg-slate-400 hover:text-white"
          onClick={cancelButtonHandler}
        >
          <Icons.Cancel size={"1x"} />
          Cancel
        </button>
        <button
          className="text-base bg-cyan-600 text-white hover:bg-cyan-500 "
          onClick={() => {}}
        >
          <Icons.Save size={"lg"} />
          Save
        </button>
      </div>
    </form>
  );

  const experienceInterface = (
    <>
      {portfolioState.experience.map((item) => {
        return <ExperienceItemCollapsed key={item.uid} item={item} setError={setError} />;
      })}
      <div className="interface items-center justify-center">
        <button
          className="text-base text-white bg-cyan-600 flex-initial hover:bg-cyan-500 px-5 interface-button"
          onClick={showInputHandler}
        >
          <Icons.Add size={"lg"} />
          Experience
        </button>
      </div>
    </>
  );

  return <>{showInput ? experienceInput : experienceInterface}</>;
}

export default Experience;
