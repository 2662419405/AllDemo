
// function add(num1, num2) {
//     return num1 + num2
// }

// describe('Kaikeba', () => {
//     it('测试加法', () => {
//         expect(add(1, 3)).toBe(3)
//         expect(add(1, 3)).toBe(4)
//         expect(add(-2, 3)).toBe(1)
//     })
// })
  




// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import KaikebaComp from '@/components/Kaikeba.vue'
import { mount } from '@vue/test-utils'

describe('KaikebaComp', () => {
  // 检查原始组件选项
  it('由created生命周期', () => {
    expect(typeof KaikebaComp.created).toBe('function')
  })

  // 评估原始组件选项中的函数的结果
  it('初始data是vue-text', () => {
    expect(typeof KaikebaComp.data).toBe('function')

    const defaultData = KaikebaComp.data()
    expect(defaultData.message).toBe('vue-text')
  })

  // 检查 mount 中的组件实例
  it('mount之后测data是开课吧', () => {
    const vm = new Vue(KaikebaComp).$mount()
    expect(vm.message).toBe('开课吧')
  })

  it('按钮点击后', () => {
    const wrapper = mount(KaikebaComp)
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.message).toBe('按钮点击')
    // 测试html渲染结果
    expect(wrapper.find('span').html()).toBe('<span>按钮点击</span>')
  })

//   // 创建一个实例并检查渲染输出
//   it('renders the correct message', () => {
//     const Constructor = Vue.extend(KaikebaComp)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.textContent).toBe('bye!')
//   })
})