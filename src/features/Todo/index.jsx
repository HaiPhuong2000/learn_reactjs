import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import NotFound from "../../components/Not Found";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
// TodoFeature.propTypes = {};
//cmont
function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <h3>Todo List</h3>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
