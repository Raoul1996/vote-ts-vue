import Vue from 'vue'
import ElementUI from 'element-ui'
import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import VueRouter from 'vue-router'
import Register from '@/views/Register.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)

describe('Register.vue', () => {
  it('should render title when passed', () => {
    const title: string = 'This is text'
    const wrapper = shallowMount(Register, {})
    wrapper.setData({title})
    expect(wrapper.text()).to.include(title)
  })
})
