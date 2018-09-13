import React, {Component} from 'react'

export default class TeslaDisplay extends Component {
    render(){
        return(
            <div className="tesla-car">
                <div className="tesla-wheels">
                    <div className="tesla-wheel tesla-wheel--front tesla-wheel--19"></div>
                    <div className="tesla-wheel tesla-wheel--rear tesla-wheel--19"></div>
                </div>
            </div>
        )
    }
}