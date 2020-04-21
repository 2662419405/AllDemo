import React, { useState, Fragment } from "react";
import TodoMvcItem from "./todoMvcItem";
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
            <label htmlFor="box"></label>
            <ul className="todo-list">
              {list.map((v, i) => {
                return <TodoMvcItem key={i} list={v} />;
              })}
            </ul>
          </div>
          <div className="footer">
            <span className="todo-count">
              <strong>0</strong>
              <span> items left</span>
            </span>
            <ul className="filters">
              <li className="selected">All</li>
              <span></span>
              <li>Active</li>
              <span></span>
              <li>Completed</li>
              <span></span>
            </ul>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default TodoMvcList;
