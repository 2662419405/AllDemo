import React, { useState, Fragment, useEffect } from "react";
import TodoMvcItem from "./todoMvcItem";
import TodoMvcFooter from "./todoMvcFooter";
import "./todoMvcList.scss";

interface Iprops {}

export interface Items {
  title: string;
  completed: boolean;
  id: number;
}

type listTypes = Items[];

const TodoMvcList: React.FC<Iprops> = () => {
  let [list, setList] = useState<listTypes>([]);
  let [val, setVal] = useState<string>("");
  let [selected, setSelected] = useState<string>("#/");

  useEffect(() => {
    setSelected(window.location.hash);
    setList(
      window.localStorage.getItem("list")
        ? [...JSON.parse(window.localStorage.getItem("list") as string)]
        : []
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem("list", JSON.stringify([...list]));
  }, [list]);

  let completedCount: number = 0;
  list.filter((i) => {
    return i.completed !== false && completedCount++;
  });
  /**
   * 输入回车,添加数据,并且清空列表
   * @param e 事件对象
   */
  const postValData = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 13 || val.length === 0) return false;
    let obj = {
      title: val,
      completed: false,
      id: new Date().getTime(),
    };
    setList([...list, obj]);
    setVal("");
  };
  /**
   *
   * @param index 删除的索引
   */
  const deleteSpliceArr = (index: number) => {
    var newArr = list;
    newArr.splice(index, 1);
    setList([...newArr]);
  };
  /**
   *
   * @param index 改变的索引
   * @param competed 改变的状态
   */
  const changeCompeted = (index: number, competed: boolean) => {
    var newArr = list;
    newArr[index].completed = competed;
    setList([...newArr]);
  };
  /**
   *
   * @param index 改变的索引
   * @param value 改变的值
   */
  const doubleEditValue = (index: number, value: string) => {
    var newArr = list;
    newArr[index].title = value;
    setList([...newArr]);
  };
  /**
   * 清除选择的元素
   */
  const deleteCompleted = () => {
    const arr = list.filter((i) => {
      return i.completed === false;
    });
    setList([...arr]);
  };
  /**
   * 全选 && 反选
   */
  const seletedAll = () => {
    if (list.length - completedCount === 0) {
      list.filter((i) => {
        return (i.completed = false);
      });
      setList([...list]);
    } else {
      list.filter((i) => {
        return (i.completed = true);
      });
      setList([...list]);
    }
  };
  const newList = list.filter((v) => {
    if (selected === "#/active") {
      return v.completed === false;
    }
    if (selected === "#/completed") {
      return v.completed === true;
    } else {
      return v;
    }
  });
  return (
    <div className="todoapp">
      <div className="header">
        <h1>todos</h1>
        <input
          onChange={(e) => setVal(e.target.value)}
          onKeyUp={(e) => postValData(e)}
          value={val}
          type="text"
          placeholder="请填写内容"
        />
      </div>
      {list.length > 0 && (
        <Fragment>
          <div className="main">
            <input id="box" className="toggle-all" type="checkbox" />
            <label
              htmlFor="box"
              onClick={seletedAll}
              className={completedCount === list.length ? "com-label" : ""}
            ></label>
            <ul className="todo-list">
              {newList.map((v, i) => {
                return (
                  <TodoMvcItem
                    deleteHandler={(index) => deleteSpliceArr(index)}
                    doubleEditVal={(index, val) => doubleEditValue(index, val)}
                    competed={(index, competed) =>
                      changeCompeted(index, competed)
                    }
                    key={i}
                    list={v}
                    index={i}
                  />
                );
              })}
            </ul>
          </div>
          <TodoMvcFooter
            deleteCompleted={deleteCompleted}
            setSeleted={(val) => setSelected(val)}
            selected={selected}
            list={list}
            completedCount={completedCount}
          />
        </Fragment>
      )}
    </div>
  );
};

export default TodoMvcList;
