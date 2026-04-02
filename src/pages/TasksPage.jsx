import {TasksProvider} from "../Context/TasksContext.jsx";
import Todo from "../components/ToDo.jsx";

const TasksPage = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  );
};

export default TasksPage;