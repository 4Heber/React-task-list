import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskList() {
  const {tasks} = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">There are no tasks yet...</h1>;
  }

  return (
    <div>
      <section className="grid grid-cols-4 gap-2">
        {tasks.map((task, i) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </div>
  );
}

export default TaskList;
