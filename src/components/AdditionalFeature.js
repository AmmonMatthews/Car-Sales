import React from 'react';
import { buyItem } from '../actions/index'


const AdditionalFeature = props => {
  console.log('each feature', props)
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button is-info is-rounded" onClick={() => {props.buyItem(props.feature)}} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
