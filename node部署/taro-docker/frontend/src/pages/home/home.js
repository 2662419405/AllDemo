import Taro, { Component, hideToast } from '@tarojs/taro'
import { View,Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtDivider,AtNavBar, AtCard, AtBadge,AtIcon,AtLoadMore } from 'taro-ui'
import './home.scss'

import { observer, inject } from '@tarojs/mobx'

console.log(global)


@inject('cartStore')
@observer
export default class Home extends Component {

  config = {
    enablePullDownRefresh:true
  }
  constructor(props) {
    super(props)
    this.page = 1
    this.state = {
      isH5:process.env.TARO_ENV === 'h5',
      top: [],
      goods: [],
      hasMore:false
    }
  }
  onPullDownRefresh(){
    this.getGoods()

  }


  onReachBottom(){
    console.log('')
    if(!this.state.hasMore){
      // 数据到底了 不需要加载更多了
      return 
    }

    this.loadMore()
  }
  loadMore = ()=>{


    this.page = this.page+1
    this.getGoods(true)
  }
  componentDidMount() {
    // 获取轮播图

    global.getData('api/top').then(top => {
      this.setState({ top })
    })
    this.getGoods()


  }
  getGoods(append) {

    global.getData('api/goods?page=' + this.page).then(goods => {
      if(append){
        // 追加模式，分页
        this.setState({
          goods:[...this.state.goods, ...goods]
        })
      }else{
        // 初始化
        this.page = 1
        this.setState({ goods })

      }
      this.setState({
        hasMore:goods.length===10
      })
    })
  }
  addCart = (item)=>{
    this.props.cartStore.addCart(item)
  }
  render() {
    console.log(this.state)
    return (
      <View className='index'>
        {this.state.isH5?<AtNavBar title="开课吧" ></AtNavBar>:null}
        <Swiper
          className='swiper-container'
          indicatorActiveColor='#e93b3d'
          interval={5000}
          circular
          indicatorDots
          autoplay>

          {this.state.top.map(t => {
            return <SwiperItem>
              <Image className='swiper-img' mode='aspectFit' src={`${global.url}course/${t.img}`}></Image>

            </SwiperItem>
          })}
        </Swiper>
        <View style="margin-top:10px">

        {this.state.goods.map(item => {
          const thumb = item.solded > 200 ? global.url + 'fire.png' : ''
          return <AtCard
            title={item.name}
            note="课程简介简介简介课程简介简介简介课程简介简介简介课程简介简介简介"
            extra={`￥${item.price}`}
            thumb={thumb}
          >

            <View className='at-row'>
              <View className='at-col at-col-4'>
                <Image mode='aspectFit' className="card-img" src={`${global.url}course/${item.img}`} ></Image>

              </View>
              <View className='at-col at-col-7'>

              <View>已有{item.solded}人购买</View>
              <View>
                <AtBadge value={item.tag} />

              </View>

              </View>
              <View className='at-col at-col-1'>

              <AtIcon onClick={()=>this.addCart(item)} value="add" color="#e93b3d" size="30"></AtIcon>
              </View>
            </View>


          </AtCard>
        })}

        </View>


        {
          this.state.hasMore ?<View>
            {this.state.isH5 ?<AtLoadMore onClick={this.loadMore} />:null}
          </View> : <AtDivider content='没有更多了' color="#e93b3d"></AtDivider>
        }
        


      </View>
    )
  }
}

