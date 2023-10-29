import React from 'react'

function Education({education}) {
  const formatDate = (date)=>{
    if(date === 'Present') return date;
    const [year, month] = date.split('-')
    return `${month}/${year}`
  }

  const {school, degree, location, startDate, endDate} = education

  return (
    <div className="education-item">
      <div className="education-item-left">
        <p className="dates">
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
        <p>{location}</p>
      </div>
      <div className="education-item-right">
        <h3>{school}</h3>
        <p>{degree}</p>
      </div>
    </div>
  );
}

export default Education