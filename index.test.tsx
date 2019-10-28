import React from 'react'
import ReactDOM from 'react-dom'
import ReactChip from './index'

describe('ReactChip', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ReactChip />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
