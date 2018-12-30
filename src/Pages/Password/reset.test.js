import React from 'react'
import { mount } from 'enzyme'
import ResetPasswordPage from './reset'

describe('ResetPasswordPage', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<ResetPasswordPage />)
  })

  it('should pass with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
