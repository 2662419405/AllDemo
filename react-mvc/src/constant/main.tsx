import React, { Fragment } from "react";
import TodoMvcList from "../components/todoMvcList";

export interface Iprops {}

const Main: React.FC<Iprops> = (props) => {
  return (
    <Fragment>
      <TodoMvcList />
    </Fragment>
  );
};

export default Main;
