import React, { useEffect, useState } from 'react'

function PersonalDetails({personalDetails, Icons}) {
  const [phoneIsEmpty, setPhoneIsEmpty] = useState(true)
  const [emailIsEmpty, setEmailIsEmpty] = useState(true)
  const [addressIsEmpty, setAddressIsEmpty] = useState(true)

  const isEmpty = (item)=>{
    if(Array.isArray(item)) return item.some((i) => !i);
    return item === ''
  }
  
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