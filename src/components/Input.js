import React from "react";

function Input() {
  return (
    <div className="input-container">
      <div className="input-wrapper p-2 flex-row">
        <button className="text-red-800">Clear</button>
        <button className="bg-slate-200">Load Preset</button>
      </div>
      <div className="input-wrapper ">
        <h1>Personal details</h1>
        <form>
          <div className="input-item">
            <label htmlFor="firstname">
              <h3>First name</h3>
            </label>
            <input type="text" placeholder="First name" />
          </div>
          <div className="input-item">
            <label htmlFor="lastname">
              <h3>Last name</h3>
            </label>
            <input type="text" placeholder="Last name" />
          </div>
          <div className="input-item">
            <label htmlFor="lastname">
              <h3>E-mail</h3>
            </label>
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="input-item">
            <label htmlFor="lastname">
              <h3>Phone number</h3>
            </label>
            <input type="tel" placeholder="Phone number" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
