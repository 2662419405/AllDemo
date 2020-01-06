import Vue from 'vue'
import Demo from '../../src/components/Demo.vue'

function add(num1,num2){
    return num1 + num2
}

// 测试套件
describe('sunhang',()=>{
    // 测试选项
    it('测试add函数',()=>{
        // 断言
        expect(add(1,3)).toBe(4)
        expect(add(-2,3)).toBe(1)
        expect(add(1,4)).toBe(3)
    })
})

// 导入vue进行测试
describe('Demo',()=>{
    // 检测生命周期
    it('检测生命周期',()=>{
        expect(typeof Demo.created ).toBe('function')
    })
    // 检测data是数据是什么
    it('初始化data是vue-text', ()=>{
        expect(typeof Demo.data).toBe('function')
        expect(Demo.data().message).toBe('vue-text')
    })
})
