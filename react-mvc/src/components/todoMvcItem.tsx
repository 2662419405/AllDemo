import React, { useState } from "react";
import { Items } from "./todoMvcList";
import "./todoMvcList.scss";

interface Iprops {
  list: Items;
  index: number;
  deleteHandler: (index: number) => void;
  competed: (index: number, competed: boolean) => void;
  doubleEditVal: (index: number, val: string) => void;
}

const TodoMvcItem: React.FC<Iprops> = (props) => {
  const { list, index } = props;
  const [competed, setCompeted] = useState<boolean>(false);
  const [editInput, setEditInput] = useState<boolean>(false);
  const [val, setVal] = useState<string>(list.title);
  const changeItem = (index: number) => {
    props.competed(index, !competed);
    setCompeted(!competed);
  };
  const changeItemEdit = () => {
    if (val.length === 0) {
      props.deleteHandler(index);
      return false;
    }
    setEditInput(false);
    props.doubleEditVal(index, val);
  };
  return (
    <li
      className={[
        "list-mvc",
        list.completed ? "competed" : "",
        editInput ? "editing" : "",
      ].join(" ")}
    >
      <div className="view">
        <input
          onChange={() => changeItem(index)}
          type="checkbox"
          className="toggle"
        />
        <label onDoubleClick={() => setEditInput(!editInput)}>
          {list.title}
        </label>
        <button
          className="destroy"
          onClick={() => props.deleteHandler(index)}
        ></button>
      </div>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onBlur={changeItemEdit}
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            changeItemEdit();
          }
        }}
        type="text"
        className={editInput ? "edit" : ""}
      />
    </li>
  );
};

export default TodoMvcItem;
