import { Layout, Menu } from "antd";
import Link from "umi/link";
import styles from "./index.css";
import React, { Component } from "react";
import { Icon, Badge, Dropdown } from "antd";
import { connect } from "dva";

const { Header, Footer, Content } = Layout;

@connect(state => ({
  count: state.cart.length,
  cart: state.cart
}))
export default class extends Component {
  onItemClick = item => {
    console.log(item);
  };
  render() {
    const selectedKeys = [this.props.location.pathname];
    const menu = (
      <Menu>
        {this.props.cart.map((item, index) => (
          <Menu.Item key={index}>
            {item.name}×{item.count} <span>￥{item.count * item.price}</span>
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      // 上中下布局
      <Layout>
        {/* 页头 */}
        <Header className={styles.header}>
          <img
            className={styles.logo}
            src="https://img.kaikeba.com/logo-new.png"
          />
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={selectedKeys}
            style={{ lineHeight: "64px", float: "left" }}
          >
            <Menu.Item key="/">
              <Link to="/">商品</Link>
            </Menu.Item>
            <Menu.Item key="/users">
              <Link to="/users">用户</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">关于</Link>
            </Menu.Item>
          </Menu>
          {/* 购物车信息 */}
          <Dropdown overlay={menu} placement="bottomRight">
            <div className={styles.cart}>
              <Icon type="shopping-cart" style={{ fontSize: 18 }} />
              <span>我的购物车</span>
              <Badge count={this.props.count} offset={[-4, -18]} />
            </div>
          </Dropdown>
        </Header>
        {/* 内容 */}
        <Content className={styles.content}>
          <div className={styles.box}>{this.props.children}</div>
        </Content>
        {/* 页脚 */}
        <Footer className={styles.footer}>开课吧</Footer>
      </Layout>
    );
  }
}
