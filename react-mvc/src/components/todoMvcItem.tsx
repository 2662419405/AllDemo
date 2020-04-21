import React from "react";
import { Items } from "./todoMvcList";
import "./todoMvcList.scss";

interface Iprops {
  list: Items;
}

const TodoMvcItem: React.FC<Iprops> = (props) => {
  const list = props.list;
  return (
    <li className="list-mvc">
      <div className="view">
        <input type="checkbox" className="toggle" />
        <label>{list.title}</label>
        <button className="destroy"></button>
      </div>
      <input type="text" className="edit" />
    </li>
  );
};

export default TodoMvcItem;
