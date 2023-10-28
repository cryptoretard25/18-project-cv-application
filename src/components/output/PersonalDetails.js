import React from 'react'

function PersonalDetails({personalDetails, Icons}) {
  return (
    <>
      <h1 className="text-4xl">
        {personalDetails.firstname} {personalDetails.lastname}
      </h1>
      <div className="inline-details">
        <h3>
          <Icons.Mail size={"1x"} />
          {personalDetails.email}
        </h3>
        <h3>
          <Icons.Phone size={"1x"} />
          {personalDetails.phonenumber}
        </h3>
      </div>
      <h3>
        <Icons.Location size={"1x"} />
        {personalDetails.address}
      </h3>
    </>
  );
}

export default PersonalDetails