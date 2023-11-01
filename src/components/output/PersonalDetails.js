import React from "react";
import { isEmpty } from "../../preset/utils";

function PersonalDetails({ personalDetails, Icons }) {
  return (
    <>
      <h1 className="text-4xl">
        {personalDetails.firstname} {personalDetails.lastname}
      </h1>
      <div className="inline-details">
        {!isEmpty(personalDetails.email) && (
          <h3>
            <Icons.Mail size={"1x"} />
            {personalDetails.email}
          </h3>
        )}
        {!isEmpty(personalDetails.phone) && (
          <h3>
            <Icons.Phone size={"1x"} />
            {personalDetails.phone.join("")}
          </h3>
        )}
      </div>
      {!isEmpty(personalDetails.address) && (
        <h3>
          <Icons.Location size={"1x"} />
          {personalDetails.address}
        </h3>
      )}
    </>
  );
}

export default PersonalDetails;
