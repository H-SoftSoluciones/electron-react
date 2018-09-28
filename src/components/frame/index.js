import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Frame extends Component {
  render() {
    return (
      <div id="Frame" className="Frame">
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(Frame)
