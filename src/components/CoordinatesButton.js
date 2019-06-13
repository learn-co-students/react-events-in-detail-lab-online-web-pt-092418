import React from 'react';

export default class CoordinatesButton extends React.Component {

  callback = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    this.props.onReceiveCoordinates([x, y])
  }

  render () {
    return (
      <div>
        <button onClick={this.callback}>
          Coordinates Button
        </button>
      </div>
    )
  }
}
