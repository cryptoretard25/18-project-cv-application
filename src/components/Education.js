import React from "react";
import * as Icons from "./Icons";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import { useEffect } from "react";
import ItemCollapsed from "./ItemCollapsed";
import EducationInput from "./EducationInput";

const emptyEducation = {
  school: "",
  degree: "",
  location: "",
  startDate: "",
  endDate: "",
};

function Education({ showInput, setShowInput, setError }) {
  const { portfolioState, portfolioDispatch } = useContext(AppContext);
  const [education, setEducation] = useState(emptyEducation);

  const showInputHandler = () => {
    setShowInput(!showInput);
  };

  const educationInputHandler = (e) => {
    const type = e.target.id;
    setEducation({
      ...education,
      [type]: e.target.value,
    });
  };

  const saveButtonHandler = (e) => {
    e.preventDefault();
    const complete = Object.values(education).every((item) => item);
    if (!complete) {
      setError("You need to fill all the fields");
      return;
    }
    portfolioDispatch({ type: "EDUCATION", value: education });
    setEducation(emptyEducation);
    showInputHandler();
  };

  useEffect(() => {
    console.log(education);
  }, [education]);

  useEffect(() => {
    console.log(portfolioState);
  }, [portfolioState]);

  const educationInput = (
    <form>
      <EducationInput
        inputState={education}
        inputHandler={educationInputHandler}
        setInputState={setEducation}
      />
      <div className="interface">
        <button
          className="text-base bg-slate-200 hover:bg-slate-400 hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            showInputHandler();
          }}
        >
          <Icons.Cancel size={"1x"} />
          Cancel
        </button>
        {/* <button className="text-base bg-slate-200 hover:bg-slate-400 hover:text-white">
          <Icons.Thrash size={"1x"} />
          Delete
        </button> */}
        <button
          className="text-base bg-cyan-600 text-white hover:bg-cyan-500 "
          onClick={saveButtonHandler}
        >
          <Icons.Save size={"lg"} />
          Save
        </button>
      </div>
    </form>
  );

  const educationInterface = (
    <>
      {portfolioState.education.map((item, index) => {
        return <ItemCollapsed key={index} item={item} setEducation={setEducation} education={education}/>;
      })}
      <div className="interface items-center justify-center">
        <button
          className="text-base text-white bg-cyan-600 flex-initial hover:bg-cyan-500 px-5 interface-button"
          onClick={showInputHandler}
        >
          <Icons.Add size={"lg"} />
          Education
        </button>
      </div>
    </>
  );

  return <>{showInput ? educationInput : educationInterface}</>;
}

export default Education;
