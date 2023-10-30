import React from 'react'
import { formatDate } from "../../preset/utils";

function Experience({experience}) {
  const {company, position, location, startDate, endDate, description} = experience;


  return (
    <div className="output-item">
      <div className="output-item-left">
        <p className="dates">
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
        <p>{location}</p>
      </div>
      <div className="output-item-right">
        <h3>{company}</h3>
        <p>{position}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Experience