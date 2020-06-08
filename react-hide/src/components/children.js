import React, { Component } from "react";

class Children extends Component {
  render() {
    const { fowwarde } = this.props;
    console.log(this.props);
    return <div ref={fowwarde}>孩子元素</div>;
  }
}

export default React.forwardRef((props, ref) => {
  return <Children {...props} fowwarde={ref}></Children>;
});
