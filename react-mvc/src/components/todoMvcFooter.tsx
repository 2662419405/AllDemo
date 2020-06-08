import React from "react";
import "./todoMvcList.scss";
import { Items } from "./todoMvcList";

interface Iprops {
  completedCount: number;
  list: Items[];
  selected: string;
  setSeleted: (val: string) => void;
  deleteCompleted: () => void;
}

const TodoMvcFooter: React.FC<Iprops> = (props) => {
  const { completedCount, list, selected } = props;
  return (
    <div className="footer">
      <span className="todo-count">
        <strong>{list.length - completedCount}</strong>
        <span> items left</span>
      </span>
      <ul className="filters">
        <li
          onClick={() => props.setSeleted("#/")}
          className={selected === "#/" || selected === "" ? "selected" : ""}
        >
          <a href="#/">All</a>
        </li>
        <span></span>
        <li
          onClick={() => props.setSeleted("#/active")}
          className={selected === "#/active" ? "selected" : ""}
        >
          <a href="#/active">Active</a>
        </li>
        <span></span>
        <li
          onClick={() => props.setSeleted("#/completed")}
          className={selected === "#/completed" ? "selected" : ""}
        >
          <a href="#/completed">Completed</a>
        </li>
        <span></span>
      </ul>
      {completedCount > 0 && (
        <button onClick={props.deleteCompleted} className="clear-completed">
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoMvcFooter;
