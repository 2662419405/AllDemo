import Taro, { Component } from '@tarojs/taro'
import { View, Text,Input } from '@tarojs/components'

import { AtButton,AtInput,AtList, AtListItem ,AtForm} from 'taro-ui'
import './user.scss'



export default class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }
  constructor(props){
    super(props)
    this.state={
      isH5:process.env.TARO_ENV === 'h5',
    }
  }
  render () {
    return (
      <View className='index'>
      {
        !this.state.isH5?<View style="">
        微信点击登录 获取openid
      </View>:<AtForm>
        <AtInput
          name='value'
          title='用户'
          type='text'
          placeholder=''
        />
        <AtInput
          name='value'
          title='密码'
          type='text'
          placeholder=''
        />
        <AtButton formType='submit'>登录</AtButton>
      </AtForm>
    
      }
          
      </View>
    )
  }
}

