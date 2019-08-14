import React from 'react';

export default class DelayedButton extends React.Component {
  handleButtonDelay = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)}, this.props.delay);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleButtonDelay}>Delay Click!</button>
      </div>
    )
  }

}
