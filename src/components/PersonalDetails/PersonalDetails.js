import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { User } from "../Icons";

function PersonalDetails() {
  const { portfolioState, portfolioDispatch } = useContext(AppContext);

  const onInputChange = (e) =>{
    portfolioDispatch({ type: e.target.id, value: e.target.value });
    console.log(e.target.id);
    console.log(portfolioState.personalDetails[e.target.id])
  }
    


  return (
    <div className="input-wrapper ">
      <h1>
        <User size={"sm"} />
        <span>Personal details</span>
      </h1>
      <form>
        <div className="input-item">
          <label htmlFor="firstname">
            <h3>First name</h3>
          </label>
          <input
            type="text"
            placeholder="First name"
            id="firstname"
            maxLength={19}
            value={portfolioState.personalDetails.firstname}
            onChange={onInputChange}
          />
        </div>
        <div className="input-item">
          <label htmlFor="lastname">
            <h3>Last name</h3>
          </label>
          <input
            type="text"
            placeholder="Last name"
            id="lastname"
            maxLength={19}
            value={portfolioState.personalDetails.lastname}
            onChange={onInputChange}
          />
        </div>
        <div className="input-item">
          <label htmlFor="email">
            <h3>E-mail</h3>
          </label>
          <input
            type="email"
            placeholder="Enter e-mail"
            id="email"
            value={portfolioState.personalDetails.email}
            onChange={onInputChange}
          />
        </div>
        <div className="input-item">
          <label htmlFor="phonenumber">
            <h3>Phone number</h3>
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            id="phonenumber"
            value={portfolioState.personalDetails.phonenumber}
            onChange={onInputChange}
          />
        </div>
        <div className="input-item">
          <label htmlFor="address">
            <h3>Address</h3>
          </label>
          <input
            type="text"
            placeholder="Country, City"
            id="address"
            value={portfolioState.personalDetails.address}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
