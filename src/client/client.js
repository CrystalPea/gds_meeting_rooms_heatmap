import './styles.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {RoomList, loadAllRooms} from './roomList'

const roomsPromise = loadAllRooms()

ReactDOM.render(
	<RoomList roomsPromise={roomsPromise} />,
	document.getElementById('main'))
