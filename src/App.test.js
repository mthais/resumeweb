import React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import Router from './Router'
import App from './App'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should have a provider component', () => {
    expect(wrapper.find(Provider)).toHaveLength(1)
  })

  it('should have a router component', () => {
    expect(wrapper.find(Router)).toHaveLength(1)
  })
})
