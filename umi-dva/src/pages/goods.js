import styles from "./goods.css";
import { connect } from "dva";
import { Button, Card } from "antd";
import { useEffect } from "react";

export default connect(
  state => ({
    loading: state.loading, // dva可以通过loading空间获取加载状态
    goodsList: state.goods // 获取指定命名空间的模型状态
  }),
  {
    addGood: title => ({
      type: "goods/addGood", // action的type需要以命名空间为前缀+reducer名称
      title
    }),
    getList: () => ({
      type: "goods/getList"
    })
  }
)(function({ goodsList, addGood, getList, loading }) {
  useEffect(() => {
    getList();
  }, []);
  console.log(loading);

  return (
    <div className={styles.normal}>
      <h1>Page goods</h1>
      {/* 商品列表 */}
      <div>
        {/* 加载状态 */}
        {loading.models.goods && <p>loading...</p>}
        {goodsList.map(good => {
          return (
            <Card key={good.title}>
              <div>{good.title}</div>
            </Card>
          );
        })}
        <div>
          <Button onClick={() => addGood("商品" + new Date().getTime())}>
            添加商品
          </Button>
        </div>
      </div>
    </div>
  );
});
