// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    
    handleClick(evt) {
        console.log("got to button")
        evt.persist();
        setTimeout(() => this.props.onDelayedClick(evt), this.props.delay);
    }

    render() {
        return(
            <button onClick= {(evt) => this.handleClick(evt)}></button>
        )
    }  
}