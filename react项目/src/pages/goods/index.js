import React, { Component } from "react";
import { Button, Card } from "antd";
import { connect } from "dva";

@connect(
  state => ({
    goodsList: state.goods,
    loading: state.loading
  }),
  {
    addGood: title => ({
      type: "goods/addGood",
      payload: { title }
    }),
    getList: () => ({
      type: 'goods/getList'
    })
  }
)
class Goods extends Component {
  componentDidMount(){
    this.props.getList({foo:'bar'});
  }
  render() {
    // console.log(this.props.loading);
    if (this.props.loading.models.goods) {
      return <div>加载中...</div>
    }
    return (
      <div>
        {/* 商品列表 */}
        <div>
          {this.props.goodsList.map(good => {
            return (
              <Card key={good.title}>
                <div>{good.title}</div>
              </Card>
            );
          })}
          <div>
            <Button
              onClick={() =>
                this.props.addGood("添加卡片" + new Date().getTime())
              }
            >
              添加卡片
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Goods;
