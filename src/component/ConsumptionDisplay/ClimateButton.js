import React, {Component} from 'react';

export default class ClimateButton extends Component {
    render(){
        const currentAc = this.props.currentAc;
        const currentTemperature = this.props.currentTemperature;
        return(
            <div className="tesla-climate">
                <button className={`tesla-climate__item 
                                    ${ currentAc ? 'tesla-climate__item--active' : '' }
                                    ${ ((currentTemperature <= 10) && currentAc) ? 'tesla-climate__item--active--heat' : ''}
                                    ` 
                                  } 
                                    type="button"
                                    onClick={this.props.onClickButton}
                                    >
                    <p>{`${ currentTemperature <= 10 ? 'heat' : 'ac'} ${currentAc ? 'on' : 'off'}`}</p>
                    <i className={`tesla-climate__icon
                                    ${ currentTemperature <= 10 ? 'tesla-climate__icon--tesla-heat ':''}
                                    ${ currentAc ? 'tesla-climate__item--active--heat' : '' }
                                    `}
                                    ></i>
                    <input name="climate" type="checkbox" />
                </button>
            </div>
        )
    }
}