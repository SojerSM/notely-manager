import TaskContext from "./task-context";

const TaskProvider = function (props) {
  return (
    <TaskContext.Provider value={props.TaskContext}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
