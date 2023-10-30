import React, { useEffect, useState } from 'react'
import { isEmpty } from '../../preset/utils'

function PersonalDetails({personalDetails, Icons}) {
  const [phoneIsEmpty, setPhoneIsEmpty] = useState(true)
  const [emailIsEmpty, setEmailIsEmpty] = useState(true)
  const [addressIsEmpty, setAddressIsEmpty] = useState(true)

  useEffect(()=>{
    setPhoneIsEmpty(isEmpty(personalDetails.phone));
    setEmailIsEmpty(isEmpty(personalDetails.email));
    setAddressIsEmpty(isEmpty(personalDetails.address));
  },[personalDetails])

  return (
    <>
      <h1 className="text-4xl">
        {personalDetails.firstname} {personalDetails.lastname}
      </h1>
      <div className="inline-details">
        {!emailIsEmpty && <h3>
          <Icons.Mail size={"1x"} />
          {personalDetails.email}
        </h3>}
        {!phoneIsEmpty && <h3>
          <Icons.Phone size={"1x"} />
          {personalDetails.phone.join('')}
        </h3>}
      </div>
      {!addressIsEmpty && <h3>
        <Icons.Location size={"1x"} />
        {personalDetails.address}
      </h3>}
    </>
  );
}

export default PersonalDetails