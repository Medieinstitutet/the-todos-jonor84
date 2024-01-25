import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([
    { text: "Clean house", finished: true },
    { text: "Do the dishes", finished: false },
    { text: "Go shopping", finished: false },
    { text: "Clean car", finished: false },
    { text: "Take out the garbage", finished: false },
  ]);

  const markAsFinished = (item) => {
    const updatedTodoItems = [...todoItems];
    const index = updatedTodoItems.findIndex(
      (todoItem) => todoItem.text === item.text
    );

    if (index !== -1) {
      updatedTodoItems[index].finished = true;
      setTodoItems(updatedTodoItems);
    }
  };

  const markAsUnfinished = (item) => {
    const updatedTodoItems = [...todoItems];
    const index = updatedTodoItems.findIndex(
      (todoItem) => todoItem.text === item.text
    );

    if (index !== -1) {
      updatedTodoItems[index].finished = false;
      setTodoItems(updatedTodoItems);
    }
  };
  const removeItem = (itemToRemove) => {
    const updatedTodoItems = todoItems.filter((item) => item !== itemToRemove);
    setTodoItems(updatedTodoItems);
  };

  return (
    <TodoContext.Provider
      value={{ todoItems, markAsFinished, markAsUnfinished, removeItem }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
