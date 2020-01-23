import React from 'react';
import { connect } from 'react-redux'; 
import { buyItem, removeItem } from './actions/index';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeItem={props.removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={props.buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  
  return {
    additionalPrice: state.additionalPrice, 
    car: state.car,
    additionalFeatures: state.additionalFeatures, 
  }
}

export default connect(mapStateToProps, { buyItem, removeItem })(App);

