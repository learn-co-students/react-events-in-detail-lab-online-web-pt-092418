import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

  coordinates = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])

  };

  render() {
    return (
      <form>
        <button onClick={this.coordinates}></button>
      </form>
    )
  }
}// Code CoordinatesButton Component Here
