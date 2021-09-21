// import "./App.css";
import AlbumFeature from "./features/Album";
import { Redirect, Route, Switch } from "react-router";
import TodoFeature from "./features/Todo";
import { Link, NavLink } from "react-router-dom";
import NotFound from "./components/Not Found";
//cmon
function App() {
  return (
    <div className="App">
      {/* <p>
        <Link to="/todo">Todo</Link>
      </p>
      <p>
        <Link to="/album">Album</Link>
      </p> */}

      <p>
        <NavLink to="/todos">Todo</NavLink>
      </p>
      <p>
        <NavLink to="/album">Album</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
