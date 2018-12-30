import React from 'react'
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'
import { SignupPage } from '.'

describe('SignupPage', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      isFetchingRegister: false,
      handleRegister: jest.fn()
    }

    wrapper = mount(
      <MemoryRouter initialEntries={ [ '/' ] }>
        <SignupPage { ...props } />
      </MemoryRouter>
    )
  })

  it('should match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('when submit is called', () => {
    const data = { name: 'user', email: 'user@test.com', password: '123' }

    beforeEach(async () => {
      await wrapper.find(SignupPage).instance().submit(data)
    })

    it('should calls handleSubmit function with data', () => {
      expect(props.handleRegister).toBeCalledWith(data)
    })
  })
})
