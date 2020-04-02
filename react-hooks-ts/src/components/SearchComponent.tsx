import React, { useState } from "react";
import Label from "./label";
import "./component.css";
import { Button, Row, Col } from "antd";

interface Props {}
const App = (props: Props) => {
  const [tag, setTag] = useState(["target=es6", "framework=react"]);
  /**
   * 此方法为编辑某一项
   * @param data 参数为字符串,制定修改后的内容结果
   * @param suo 参数为任意类型,如果输数字类型,则代表修改的某一项的索引
   */
  const changeValue = (data: string, suo: any) => {
    let [...arr] = tag;
    if (typeof suo === "number") {
      arr.splice(suo, 1, data);
      setTag(arr);
    } else {
      arr.push(data);
      setTag(arr);
    }
  };

  /**
   * 清空
   */
  const clearStateTags = () => {
    setTag([]);
  };

  /**
   * 展示内容,
   * tag属于一个数组,所以需要遍历为一个对象
   */
  const showStateTags = () => {
    let obj: any = {};
    tag.filter(v => {
      let arr = v.split("=");
      return (obj[arr[0]] = arr[1]);
    });
    console.log(obj);
  };

  return (
    <Row style={{ width: "1000px", margin: "0 auto" }}>
      <Col className="bgColor" span={24}>
        <Row>
          <Col span={5}>自定义搜索项:</Col>
          <Col span={19}>
            <Label
              save={(data: string, suo: any) => changeValue(data, suo)}
              item={tag}
            ></Label>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col offset={19}>
            <Button onClick={showStateTags} type="primary">
              查询
            </Button>
          </Col>
          <Col offset={1}>
            <Button onClick={clearStateTags} type="default">
              清空
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default App;
