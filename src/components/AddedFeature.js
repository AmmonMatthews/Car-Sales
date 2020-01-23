import React from 'react';

const AddedFeature = props => {
  console.log("left feat", props )
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button is-danger" onClick={() => {props.removeItem(props.feature)}}>CANCEL</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
