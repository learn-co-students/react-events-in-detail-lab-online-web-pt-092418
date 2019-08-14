import React from 'react'

export default class CoordinatesButton extends React.Component {

  handleButtonClick = (event) => {
    // debugger
    // event.preventDefault()
    const coordinate =[event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinate)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Click Me!</button>
      </div>
    )
  }
}
