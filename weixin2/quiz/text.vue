<template>
  <div class="wrap">
    <h4>课堂小测试</h4>
    <div class="aside" ref="aside">
      <p>{{testArr[indx].question}}</p>
      <ul>
        <li v-for="(item,index) in testArr[indx].answer" :key="index">
          <input type="radio" name="option" :id="index" @change="change(index,item.optionscore)" :checked="item.isChecked"/><label :for="index">{{item.optionname}}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        indx: 0,
        testArr: [{
          question: '问题一：函数的扩展中，关于rest参数的描述，正确的是',
          answer: [{
              optionname: 'A、获取函数剩下部分的参数',
              optionscore: 20,
              isTrue:true,
              isChecked:false
            },
            {
              optionname: 'B、rest参数不可以是函数的最后一个参数',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: 'C、获取函数的第一个参数',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: 'D、一个名叫rest的参数',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            }
          ]
        }, {
          question: '问题二：关于Symbol，错误的说法是',
          answer: [{
              optionname: 'A、是ES6新增的一种数据类型',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: 'B、Symbol() === Symbol() 结果为false',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: "C、Symbol('same') === Symbol('same') 结果为true",
              optionscore: 20,
              isTrue:true,
              isChecked:false
            },
            {
              optionname: 'D、当symbol值作为对象的属性名的时候，不能用点运算符获取对应的值。',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            }
          ]
        }, {
          question: '问题三：ES6的新特性Promise对象的设计初衷是?',
          answer: [{
              optionname: 'A、更好地实现遍历具有iterator接口的数据结构',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: 'B、为对象的操作增加了一层“拦截”',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: 'C、独一无二的值，用于对象属性，避免属性名冲突',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: 'D、让开发者更合理、更规范地用于处理异步操作',
              optionscore: 20,
              isTrue:true,
              isChecked:false
            }
          ]
        }, {
          question: '问题四：关于Promise对象的状态，下列说法错误的是',
          answer: [{
              optionname: 'A、三种状态分别是：pending初始状态、fulfilled成功、rejected失败',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: 'B、pending初始状态可以状变成fulfilled成功',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: 'C、rejected失败不可以状变成pending初始状态',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: 'D、rejected失败可以状变成fulfilled成功',
              optionscore: 20,
              isTrue:true,
              isChecked:false
            }
          ]
        }, {
          question: '问题五：下面关于类class的描述，错误的是',
          answer: [{
              optionname: 'A、JavaScript的类class本质上是基于原型prototype的实现方式做了进一步的封装',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: 'B、constructor构造方法是必须的',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            },
            {
              optionname: 'C、如果类的constructor构造方法有多个，后者会覆盖前者',
              optionscore: 20,
              isTrue:true,
              isChecked:false
            },
            {
              optionname: 'D、类的静态方法可以通过类名调用，不需要实例化',
              optionscore: 0,
              isTrue:false,
              isChecked:false
            }
          ]
        }],
        sum: 0
      }
    },
    methods: {
      change(index,score) {
        this.testArr[this.indx].answer[index].isChecked=true;
        this.$refs.aside.className="aside";
        if (event.target.checked) {
          if (this.indx < this.testArr.length) {
            this.indx++;
            this.sum += score; 
            this.$refs.aside.className="aside animated bounceInRight"
          }
          if (this.indx == this.testArr.length) {
           this.$refs.aside.innerHTML = `您的测试成绩是：${this.sum}`;
            this.indx=0;
          }
        }
        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html,
  body,
  .wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 1rem;
    box-sizing: border-box;
    background: #eee;
    color: #666;
    font-size: 1.6rem;
  }
  h4 {
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    font-size: 1.8rempx;
  }
  .aside{
    margin-top: 1.5rem;
  }
  .aside p {
    line-height: 1.5;
  }
  .aside ul {
    margin-top: 1rem;
  }
  .aside ul li {
    background: #fff;
    margin-bottom: 1rem;
    padding: .5rem;
    box-sizing: border-box;
    border-radius: .5rem;
    display: flex;
    align-items: center;
  }
  .aside ul li input {
    flex: 1;
    width: 1rem;
    height: 1rem;
    
  }
  .aside ul li label {
    flex:9;
    margin-left: .1rem;
  }
</style>
