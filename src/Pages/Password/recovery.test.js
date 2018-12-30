import React from 'react'
import { mount } from 'enzyme'
import RecoveryPasswordPage from './recovery'

describe('RecoveryPasswordPage', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<RecoveryPasswordPage />)
  })

  it('should pass with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
