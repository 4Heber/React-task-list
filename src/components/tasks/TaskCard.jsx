import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) { // Destructurar 'props' para extraer solo 'task'
  
  // Values of the imported context
  const {deleteTask} = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      {/* Call the function inherit from parent component as prop */}
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 transition-all"
        onClick={() => {deleteTask(task.id)}}>
        Delete task
      </button>
    </div>
  );
}
export default TaskCard;
