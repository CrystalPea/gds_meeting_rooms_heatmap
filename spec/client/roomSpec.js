import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import Room from '~/room'
import { resetDom } from '../specHelper'

describe('Room', () => {
  const room_number = 601
  let component
  let container

  beforeEach(() => {
    container = document.createElement('div')
  })

  it('displays its room number', () => {
    mountComponent()
    expect(textContent()).toEqual('601')
  })

  function textContent() {
    return ReactTestUtils
      .findRenderedDOMComponentWithTag(component, 'div')
      .textContent
  }

  function mountComponent() {
    const container = document.createElement('div')
    component = ReactDOM.render(
      <Room number={room_number} />,
      container)
  }
})
