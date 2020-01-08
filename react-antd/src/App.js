import React, { PureComponent } from "react";
import { Button } from "antd";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import * as createAction from './store/createAction';

class App extends PureComponent {
  render(){
    const {title,handlerEventClick,SyncChangeData,ChangeData} = this.props;
    return (
      <div className="App">
        123
        <Button type="primary"
          onClick={ ()=>{ handlerEventClick(1) } }
        >按钮132</Button>
        <Link to="/demo">去子组件</Link>
        <Button
          type="danger"
          onClick={ SyncChangeData }
        >异步操作</Button>
        <Button
          type="danger"
          onClick={ ChangeData }
        >同步更新</Button>
        { title }
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    title: state.Header.title
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handlerEventClick(data){
      console.log(data)
    },
    SyncChangeData(){
      dispatch(createAction.changeValue())
    },
    ChangeData(){
      dispatch({
        type: "change",
        value: "123"
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
