import React from 'react'
import ReactDOM from 'react-dom'
import Room from './room'

export default class RoomList extends React.Component {
  constructor(props) {
    super(props)
    props.roomsPromise.then(this.roomsReceived)
    this.state = {
      rooms: []
    }
  }

  roomsReceived(rooms) {
    this.setState({
      rooms: rooms
    })
  }

  render() {
    return <ul>
        {this.state.rooms.map(this.renderRoom)}
    </ul>
  }

  renderRoom(room) {
    return <li key={room.number}>
        <Room number={room.number} />
    </li>
  }
}

export function loadAllRooms() {
  return window.fetch('/rooms').then(r => r.json())
}
