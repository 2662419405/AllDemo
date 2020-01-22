# 自动化测试

常⻅的开发流程⾥，都有测试⼈员，这种我们成为⿊盒测试，测试⼈员不管内部实现机制，只看最外层的输⼊输出，⽐如你写⼀个加法的⻚⾯，会设计N个case，测试加法的正确性，这种代码⾥，我们称之为E2E测试

## 测试分类

更负责⼀些的 我们称之为集成测试，就是集合多个测试过的单元⼀起测试

还有⼀种测试叫做⽩盒测试，我们针对⼀些内部机制的核⼼逻辑 使⽤代码 进⾏编写 我们称之为单元测试

这仨都是我们前端开发⼈员进阶必备的技能

我们其实⽇常使⽤console，算是测试的雏形吧，console.log(add(1,2) == 3)

测试的好处

组件的单元测试有很多好处：

* 提供描述组件⾏为的⽂档

* 节省⼿动测试的时间
* 减少研发新特性时产⽣的 bug
* 改进设计
* 促进重构

⾃动化测试使得⼤团队中的开发者可以维护复杂的基础代码。让你改代码不再⼩⼼翼翼

<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2020-01-22_12-00-45.png" />

## 单测

> 单元测试（unit testing），是指对软件中的最⼩可测试单元进⾏检查和验证。

在vue中，推荐⽤Mocha+chai 或者jest，咱们使⽤jest演示，语法基本⼀致

新建kaikeba.spec.js，.spec.js是命名规范，写下⼀下代码

```js
function add(num1, num2) {
 return num1 + num2
}
describe('Kaikeba', () => {
 it('测试加法', () => {
 expect(add(1, 3)).toBe(3)
 expect(add(1, 3)).toBe(4)
 expect(add(-2, 3)).toBe(1)
 })
})
```

执⾏ npm run test:unit

<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2020-01-22_12-01-01.png" />

## API介绍

* describe ： 定义⼀个测试套件

* it ：定义⼀个测试⽤例
* expect ：断⾔的判断条件
* toBe ：断⾔的⽐较结果

## 测试Vue组件

⼀个简单的组件

```vue
<template>
    <div>
        <span>{{ message }}</span>
        <button @click="changeMsg">点击</button>
    </div>
</template> <script>
 export default {
    data () {
        return {
            message: 'vue-text'
        }
        },
        created () {
            this.message = '123'
        },
        methods:{
            changeMsg(){
            this.message = '按钮点击'
        }
    }
 }
</script>
```

```js
// 导⼊ Vue.js 和组件，进⾏测试
import Vue from 'vue'
import KaikebaComp from '@/components/Kaikeba.vue'
// 这⾥是⼀些 Jasmine 2.0 的测试，你也可以使⽤你喜欢的任何断⾔库或测试⼯具。
describe('KaikebaComp', () => {
    // 检查原始组件选项
    it('由created⽣命周期', () => {
        expect(typeof KaikebaComp.created).toBe('function')
        })
        // 评估原始组件选项中的函数的结果
        it('初始data是vue-text', () => {
        expect(typeof KaikebaComp.data).toBe('function')
        const defaultData = KaikebaComp.data()
        expect(defaultData.message).toBe('hello!')
    })
})
```

<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2020-01-22_12-01-15.png" />

## 检查mounted之后

```vue
it('mount之后测data是开课吧', () => {
    const vm = new Vue(KaikebaComp).$mount()
    expect(vm.message).toBe('开课吧')
})
```

## ⽤户点击

和写vue 没啥本质区别，只不过我们⽤测试的⻆度去写代码，vue提供了专⻔针对测试的 `@vue/testutils`

## 测试覆盖率

jest⾃带覆盖率，如果⽤的mocha，需要使⽤istanbul来统计覆盖率

package.json⾥修改jest配置

```json
"jest": {
    "collectCoverage": true,
    "collectCoverageFrom": ["src/**/*.{js,vue}"],
}
```

在此执⾏npm run test:unit

<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2020-01-22_12-01-27.png"/>

可以看到我们kaikeba.vue的覆盖率是100%

进⾏修改之后

<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2020-01-22_12-01-36.png"/>

现在的代码，依然是测试没有报错，但是覆盖率只有66%了，⽽且没有覆盖的代码⾏数，都标记了出来，继续努⼒加测试吧

## E2E测试

借⽤浏览器的能⼒，站在⽤户测试⼈员的⻆度，输⼊框，点击按钮等，完全模拟⽤户，这个和具体的框架关系不⼤，完全模拟浏览器⾏为

修改e2e/spec/test.js

```js
// https://docs.cypress.io/api/introduction/api.html
describe('端到端测试，抢测试⼈员的饭碗', () => {
    it('先访问⼀下', () => {
        cy.visit('/')
        // cy.contains('h1', 'Welcome to Your Vue.js App')
        cy.contains('#message', '开课吧')
    })
})
```

<img src="https://cdn.jsdelivr.net/gh/2662419405/imgPlus/Snipaste_2020-01-22_12-02-21.png"/>

可以看到是打开了⼀个浏览器进⾏测试

## 测试⽤户点击

```js
// https://docs.cypress.io/api/introduction/api.html
describe('端到端测试，抢测试⼈员的饭碗', () => {
    it('先访问⼀下', () => {
        cy.visit('/')
        // cy.contains('h1', 'Welcome to Your Vue.js App')
        cy.contains('#message', '开课吧')
        cy.get('button').click()
        cy.contains('#message', '按钮点击')
    })
})
```
