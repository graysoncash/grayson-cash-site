import React from "react"

export default class MainBody extends React.Component {
  render() {
    return (
      <div id="colorlib-main" ref={this.props.mainBodyRef}>
        {this.props.children}
      </div>
    )
  }
}
