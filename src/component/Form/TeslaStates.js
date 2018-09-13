import React, {Component} from 'react';

export default class TeslaStates extends Component {
    render(){
        debugger;
        return(
            <div className="tesla-stats">
                 <ul>
                    {  this.props.carState.map(
                        state => {
                            return(
                                <li key={state.carType}>
                                    <div className={`tesla-stats-icon tesla-stats-icon--${state.carType}`}
                                    ></div>
                                    <p>{state.mile}</p>
                                </li>
                            )
                        }
                    )}
                </ul>
            </div>
            )
        }
    }
   