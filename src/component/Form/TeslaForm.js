import React, { Component } from 'react';
import TeslaDisplay from './TeslaDisplay';
import TeslaStates from './TeslaStates';
import TeslaFooter from './TeslaFooter';
import OptionButton from '../ConsumptionDisplay/OptionButton';
import WheelButton from '../ConsumptionDisplay/WheelButton';
import ClimateButton from '../ConsumptionDisplay/ClimateButton';
import {TeslaCalculator} from './TeslaCalculator';

export default class TeslaForm extends Component {
    constructor(props){
        super(props);
        this.state={
            carState:[
            {carType:'60',mile:246},
            {carType:'60D',mile:250},
            {carType:'75',mile:297},
            {carType:'75D',mile:306},
            {carType:'90D',mile:336},
            {carType:'P100D',mile:376},
                        ],
            carConfigValue:{
                speed:55,
                temperature:20,
                ac: true,
                wheelSize:19,
            },
            speedDefaultValue:{
                title:'speed',
                unit:'mph',
                maxValue:70,
                minValue:45,
                interval:5,
            },
            temperatureDefaultValue:{
                title:'Outside Temperature',
                unit:'°',
                maxValue:40,
                minValue:-10,
                interval:10,
            }
        };
        this.statesUpdate = this.statesUpdate.bind(this);
        this.stateUpdateButton = this.stateUpdateButton.bind(this);
        this.climateButton = this.climateButton.bind(this);
        this.wheelButton = this.wheelButton.bind(this);
    }

    statesUpdate(){
        const carTypes = ["60","60D","75","75D","90D","P100D"];
        const modelData = TeslaCalculator();
        const carState = carTypes.map( carType => {
            const {speed, temperature, ac, wheelSize} = this.state.carConfigValue;
            const mile = modelData[carType][wheelSize][ac ? 'on' : 'off'].speed[speed][temperature];      
            return { carType, mile }
        });
        this.setState({carState});
        
    }

    stateUpdateButton(title,action){
        let maxValue;
        let minValue;
        let interval;
        let currentValue;
        const carConfigValue = {...this.state.carConfigValue}
        if(title === 'speed'){
            maxValue = this.state.speedDefaultValue.maxValue;
            minValue = this.state.speedDefaultValue.minValue;
            interval = this.state.speedDefaultValue.interval;
            currentValue = carConfigValue.speed;
            this.updateConfigValue(title,maxValue,minValue,interval,currentValue,action,carConfigValue);
        }
        else{
            maxValue = this.state.temperatureDefaultValue.maxValue;
            minValue = this.state.temperatureDefaultValue.minValue;
            interval = this.state.temperatureDefaultValue.interval;
            currentValue = carConfigValue.temperature;
            this.updateConfigValue(title,maxValue,minValue,interval,currentValue,action,carConfigValue);
        }
    }

    updateConfigValue(title,maxValue,minValue,interval,currentValue,action,carConfigValue){
        let updateValue;
        if(action === 'add'){
            if(currentValue < maxValue){
                updateValue = currentValue + interval;
                if(title === 'speed'){                
                    carConfigValue.speed = updateValue;
                    this.setState({carConfigValue}, () => {this.statesUpdate()})
                    return;                
                }
                carConfigValue.temperature = updateValue;
                this.setState({carConfigValue}, () => {this.statesUpdate()})
            }
        }else{
            if(currentValue > minValue){
                updateValue = currentValue - interval;
                if(title === 'speed'){                
                    carConfigValue.speed = updateValue;
                    this.setState({carConfigValue}, () => {this.statesUpdate()})
                    return;                
                }
                carConfigValue.temperature = updateValue;
                this.setState({carConfigValue}, () => {this.statesUpdate()})
            }
        }
    }

    climateButton(){
        const carConfigValue = this.state.carConfigValue;
        carConfigValue.ac = ! this.state.carConfigValue.ac;
        this.setState({carConfigValue}, () => {this.statesUpdate()})
    }

    wheelButton(wheelType){
        const carConfigValue = this.state.carConfigValue;
        carConfigValue.wheelSize = wheelType;
        this.setState({carConfigValue}, () => {this.statesUpdate()})
    }

    render(){
        return(
            <div className="wrap">
                <form className="tesla-battery">
                    <h1>Range Per Change</h1>
                    <TeslaDisplay />
                    <TeslaStates carState = {this.state.carState}/>
                    <div className="tesla-controls">
                        <OptionButton 
                                optionDefaultValue = {this.state.speedDefaultValue}
                                currentValue = {this.state.carConfigValue.speed}
                                onClickButton = {this.stateUpdateButton}
                        />
                        <OptionButton 
                                optionDefaultValue = {this.state.temperatureDefaultValue}
                                currentValue = {this.state.carConfigValue.temperature}
                                onClickButton = {this.stateUpdateButton}
                        />
                        <ClimateButton 
                                currentTemperature = {this.state.carConfigValue.temperature}
                                currentAc = {this.state.carConfigValue.ac}
                                onClickButton = {this.climateButton}
                        />
                        <WheelButton 
                                currentWheelSize = {this.state.carConfigValue.wheelSize}
                                onClickButton = {this.wheelButton}
                        />
                    </div>
                    <TeslaFooter />
                </form>
            </div>
        )
    }
}