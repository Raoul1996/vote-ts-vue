import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Captcha from '@/components/captcha.vue'

describe('Captcha.vue', () => {
  it('should render only one img element when passed', () => {
    const wrapper = shallowMount(Captcha, {})
    expect(wrapper.element.querySelector('img'))
  })
})
