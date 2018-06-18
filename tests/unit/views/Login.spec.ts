import Vue from 'vue'
import ElementUI from 'element-ui'
import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)

describe('Login.vue', () => {
  // it('should render title when passed', () => {
  //   const title: string = 'This is text'
  //   const wrapper = shallowMount(Login, {})
  //   wrapper.setData({title})
  //   expect(wrapper.text()).to.include(title)
  // })
})
