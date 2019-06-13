import React from 'react';
export default class DelayedButton extends React.Component {

  callback = (e) => {
    e.persist();
    let log = this.props.onDelayedClick(e)
    let delay = this.props.delay
    setTimeout(() => {log}, delay)
  }

  render(){
    return(
      <div>
        <button onClick={this.callback}>
          Delayed Click
        </button>
      </div>
    )
  }
}
