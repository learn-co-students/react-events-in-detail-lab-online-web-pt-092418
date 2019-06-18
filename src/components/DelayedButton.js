import React from 'react';

export default class DelayedButton extends React.Component {
  function = (event) => {
    event.persist();
    let delay = this.props.delay
    let message = this.props.onDelayedClick(event)
    setTimeout(() => {message}, delay)
  }

  render () {
    return (
      <button onClick={this.function}>Delayed Click Button</button>
    )

  }
}
