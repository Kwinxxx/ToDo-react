import Router from "./Router.jsx";
import TasksPage from "./pages/TasksPage.jsx";
import TaskPage from "./pages/TaskPage.jsx";

const App = () => {
  const routes = {
    '/': TasksPage,
    '/tasks/:id': TaskPage,
    '*': () => <div>Page not found</div>,
  }

  return (
    <Router routes = {routes}/>
  )
};

export default App
