import Vue from 'vue'
import Add from "../../src/util";
import Sun from '../../src/components/Sun.vue'
import { mount } from '@vue/test-utils'

describe('测试add函数',()=>{
  it('当两个数字相加的时候',()=>{
    expect(Add(2,3)).toBe(5)
  })
})

describe('测试vue函数',()=>{
  it('检测Sun组件数据初始化',()=>{
    expect( typeof Sun.data ).toBe('function')
    const defaultData = Sun.data();
    expect(defaultData.title).toBe('标题')
  })
  it('模拟点击按钮',()=>{
    const wrapper = mount(Sun);
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.title).toBe(2)
  })
})


// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
