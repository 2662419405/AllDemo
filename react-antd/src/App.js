import React, { PureComponent } from "react";
import { Button } from "antd";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import * as createAction from './store/createAction';

class App extends PureComponent {
  render(){
    const {title,name,handlerEventClick,SyncChangeData,ChangeData,SyncSagaData} = this.props;
    return (
      <div className="App">
        123
        <Button type="primary"
          onClick={ ()=>{ handlerEventClick(1) } }
        >按钮132</Button>
        <br />
        <Link to="/demo">去子组件</Link>
        <br />
        <Button
          type="danger"
          onClick={ SyncChangeData }
        >异步操作</Button>
        <br />
        <Button
          type="danger"
          onClick={ ChangeData }
        >同步更新</Button>
        <br />
        <Button
          type="primary"
          onClick={ ()=>{ SyncSagaData("root") } }
        >
          saga
        </Button>
        {name}
        <br />
        { title }
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    title: state.Header.title,
    name: state.Header.name
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
    },
    SyncSagaData(data){
      dispatch(createAction.sagaData(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
