import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import RoomList from '~/roomList'
import Room from '~/room'
import { resetDom } from '../specHelper'

describe('RoomList', () => {
  const rooms = [
    {"number": 42},
    {"number": 6},
    {"number": 1044},
  ]
  const roomsPromise = Promise.resolve(rooms)
  let component

  beforeEach(() => {
    resetDom()
    spyOn(Room.prototype, 'componentDidUpdate')
  })

  it('displays a list of rooms', (done) => {
    mountComponent()
    setImmediate(() => {
      expect(ulContent().children.length).toEqual(rooms.length)
      done()
    })
  })

  function textContent() {
    return ReactTestUtils
      .findRenderedDOMComponentWithTag(component, 'div')
      .textContent
  }

  function ulContent() {
    return ReactTestUtils.findRenderedDOMComponentWithTag(component, 'ul')
  }

  function mountComponent() {
    const container = document.createElement('div')
    component = ReactDOM.render(
      <RoomList roomsPromise={roomsPromise} />,
      container)
  }
})
