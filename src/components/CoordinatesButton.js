import React from 'react';

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    this.props.onReceiveCoordinates([x, y])
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>
          Coordinates Button
        </button>
      </div>
    )
  }
}
