import React from "react";

export const Context = React.createContext();
export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

export const store = {
  home: {},
  app: {
    name: 20,
    age: 10
  }
};
