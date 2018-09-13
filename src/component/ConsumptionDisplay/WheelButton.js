import React, {Component} from 'react';

export default class WheelButton extends Component {
    render(){
        
        return(
            <div className="tesla-wheels">
                <p className="tesla-wheels__title">Wheels</p>
                <div className="tesla-wheels__container">
                    {
                    [19,21].map(size => {
                        return(
                        <label 
                            key={size} 
                            className={`tesla-wheels__item
                                        tesla-wheels__item--${size}
                                        ${this.props.currentWheelSize === size ? 'tesla-wheels__item--active':''}`}>
                                <input 
                                        type='radio' 
                                        value={size} 
                                        name='wheelSize' 
                                        checked={this.props.currentWheelSize === size}
                                        onClick={() => {this.props.onClickButton(size)}}
                                        />
                                <p>{size}</p>
                        </label>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}