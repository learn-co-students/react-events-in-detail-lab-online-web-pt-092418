import React from 'react';

export default class CoordinatesButton extends React.Component {

  function = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    this.props.onReceiveCoordinates([x, y])
  }

  render () {
    return (
      (
        <button onClick={this.function}>Click me</button>
      )
    )
  }
}
