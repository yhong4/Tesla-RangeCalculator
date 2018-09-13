import React, {Component} from 'react';

export default class OptionButton extends Component {
   
    render(){
        return(
            <div className="tesla-counter">
                <p className="tesla-counter__title">{this.props.optionDefaultValue.title}</p>
                <div className="tesla-counter__container">
                    <div className="tesla-counter__item">
                        <p className="tesla-counter__number">{this.props.currentValue}
                            <span>{this.props.optionDefaultValue.unit}</span>
                        </p>
                        <div className="tesla-counter__controls">
                            <button 
                                onClick={() => this.props.onClickButton(this.props.optionDefaultValue.title, "add")}
                                type="button"
                            ></button>
                            <button
                                onClick={() => this.props.onClickButton(this.props.optionDefaultValue.title, "reduce")}
                                type="button"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}