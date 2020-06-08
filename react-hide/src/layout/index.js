import React, { PureComponent } from "react";
import Tabbar from "../components/tabbar";

export default class index extends PureComponent {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    var arr = [];
    if (this.props.children.$$typeof) {
      arr.push(this.props.children);
    } else {
      for (let item in this.props.children) {
        arr.push(this.props.children[item]);
      }
    }
    return (
      <div>
        {arr.map((v, i) => {
          return <div key={i}>{v}</div>;
        })}
        {this.props.show && <Tabbar />}
      </div>
    );
  }
}
