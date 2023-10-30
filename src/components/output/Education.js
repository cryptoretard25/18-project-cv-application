import React from 'react'
import { formatDate } from '../../preset/utils';


function Education({education}) {


  const {school, degree, location, startDate, endDate} = education

  return (
    <div className="output-item">
      <div className="output-item-left">
        <p className="dates">
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
        <p>{location}</p>
      </div>
      <div className="output-item-right">
        <h3>{school}</h3>
        <p>{degree}</p>
      </div>
    </div>
  );
}

export default Education