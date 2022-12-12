import TaskContext from "./task-context";

const TaskProvider = function (props) {
  return <TaskContext.Provider>{props.children}</TaskContext.Provider>;
};

export default TaskProvider;
