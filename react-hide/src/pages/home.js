import React, { Component } from "react";
import Layout from "../layout/index";
import Pu from "../components/pu";
import PuTwo from "../components/pu-two";
import Parent from "../hide/parent";
import Portals from "../components/Portals";

export default class home extends Component {
  render() {
    return (
      <Layout title="首页" show={true}>
        {{
          btn: <button>我是一个组件</button>,
          zu: "我是第二个组件",
          gao: <Pu />,
          gaoji: <PuTwo size={this.props.app.age} />,
          parent: <Parent />,
          Portals: <Portals />,
        }}
      </Layout>
    );
  }
}
