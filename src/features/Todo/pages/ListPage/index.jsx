import React, { useEffect, useMemo, useState } from "react";
// import PropTypes from "prop-types";
import TodoList from "../../components/TodoList";
import queryString from "query-string";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import TodoForm from "../../components/TodoForm";
// TodoFeature.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    { id: 1, title: "eat", status: "new" },
    { id: 2, title: "sleep", status: "new" },
    { id: 3, title: "code", status: "completed" },
  ];
  //cmon
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setfilteredStatus] = useState(() => {
    const param = queryString.parse(location.search);
    return param.status || "all";
  });

  useEffect(() => {
    const param = queryString.parse(location.search);
    setfilteredStatus(param.status || "all");
  }, [location.search]);

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    // setfilteredStatus("all");
    const queryParam = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleShowCompletedClick = () => {
    // setfilteredStatus("completed");
    const queryParam = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleShowNewClick = () => {
    // setfilteredStatus("new");
    const queryParam = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  const renderTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === "all" || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  const handleTodoForm = (values) => {};
  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoForm} />
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
