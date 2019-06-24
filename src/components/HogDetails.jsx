import React from 'react';

const HogDetails = (props) => {
  console.log(props);
  let weight = props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
  return (
    <div>
      <p>Specialty: {props.hog.specialty}</p>
      <p>Weight: {weight}</p>
    </div>
  )

}

export default HogDetails;
