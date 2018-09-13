import React, { Component } from 'react';
import TeslaTitle from './Title';
import TeslaForm from './Form/TeslaForm';

export default class App extends Component {
  render(){
    return(
      <div>
        <TeslaTitle />
        <TeslaForm />
      </div>
    )
  }
}


