// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    handleClick(evt){
        console.log("got here");
        this.props.onReceiveCoordinates([evt.clientX, evt.clientY]);
    
    }

    render() {
        return(
            <button onClick= {(evt) => this.handleClick(evt)}></button>
        )
    }   
}