import React, { PureComponent } from "react";
import { Button } from "antd";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

class App extends PureComponent {
  render(){
    const {title,handlerEventClick} = this.props;
    return (
      <div className="App">
        123
        <Button type="primary"
          onClick={ ()=>{ handlerEventClick(1) } }
        >按钮132</Button>
        <Link to="/demo">去子组件</Link>
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
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
