import React, {Component} from 'react'

export default class DelayedButton extends Component {

  actionTime = (e) => {
    e.persist();
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  };
  render() {
    return (
      <form>
        <button onClick={this.actionTime}></button>
      </form>
    )
  }
}// Code DelayedButton Component Here
