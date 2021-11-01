```js
// source: https://dev.to/ppciesiolkiewicz/comment/i708
import React, { useState as useStateMock } from 'react'
import { mount } from 'enzyme'

// Header uses `useState`
import { Header } from '..'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

describe('Header', () => {
  const setState = jest.fn()

  beforeEach(() => {
    ;(useStateMock as jest.Mock).mockImplementation(init => [init, setState])
  })

  it('renders', () => {
    const wrapper = mount(
      <Header />
    )
    expect(setState).toHaveBeenCalledTimes(1)
    expect(wrapper).toBeTruthy()
  })
})
```
