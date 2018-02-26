import React from 'react'
import ReactDOM from 'react-dom'

export default class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: props.number
    }
  }

  componentDidUpdate(oldProps, oldState) { }

  render() {
    return <div>{this.state.number}</div>
  }
}
