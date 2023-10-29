import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function PersonalDetails() {
  const { portfolioState, portfolioDispatch } = useContext(AppContext);

  const onInputChange = (e) =>{
    portfolioDispatch({ type: e.target.id, value: e.target.value });
  }

  const onPhoneChange = (index) => (e)=>{
    portfolioDispatch({type: e.target.id, index: index, value: e.target.value})
  }
    
  return (
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
        <label htmlFor="phone">
          <h3>Phone number</h3>
        </label>
        <div className="phone-div">
          +
          <input
            className="countrycode"
            type="tel"
            placeholder="X"
            id="phone"
            maxLength={2}
            value={portfolioState.personalDetails.phone[1]}
            onChange={onPhoneChange(1)}
          />
          (
          <input
            className="phone-first"
            type="tel"
            placeholder="XXX"
            id="phone"
            maxLength={4}
            value={portfolioState.personalDetails.phone[4]}
            onChange={onPhoneChange(4)}
          />
          )
          <input
            className="phone-rest"
            type="tel"
            placeholder="XXXXXXX"
            id="phone"
            maxLength={8}
            value={portfolioState.personalDetails.phone[7]}
            onChange={onPhoneChange(7)}
          />
        </div>
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
          maxLength={30}
        />
      </div>
    </form>
  );
}

export default PersonalDetails;
