import React,{Component} from 'react'
export default class CardShop extends Component{

    constructor(props){
        super(props);
        this.state = {
            good: [
                {
                    id:1,
                    content: "java"
                },
                {
                    id:2,
                    content: "php"
                }
            ]
        }
    }

    render(){

        // 条件渲染
        const title = this.props.title ? this.props.title : null;

        return(
            <div>
                <title />
                我是一个购物车
                <h1>列表渲染</h1>
                {/* 循环列表的渲染 */}
                {
                    this.state.good.map((item)=>{
                        return (
                            <li key={item.id}>{item.content}</li>
                        )
                    })
                }
            </div>
        )
    }
}