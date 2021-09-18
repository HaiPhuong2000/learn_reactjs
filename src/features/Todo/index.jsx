import React, { useState } from "react";
// import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
// TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    { id: 1, title: "eat", status: "new" },
    { id: 2, title: "sleep", status: "new" },
    { id: 3, title: "code", status: "completed" },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setfilteredStatus] = useState("all");

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setfilteredStatus("all");
  };
  const handleShowCompletedClick = () => {
    setfilteredStatus("completed");
  };
  const handleShowNewClick = () => {
    setfilteredStatus("new");
  };

  const renderTodoList = todoList.filter((todo) => filteredStatus === "all" || filteredStatus === todo.status);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
