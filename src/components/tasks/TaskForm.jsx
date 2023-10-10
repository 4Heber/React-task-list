import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // useContext(<contextName>) returns the values defined on the Provider, destructure the returned object to obtain the 'createTask' function
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new object as parameter to the imported function (prop)
    createTask({
      title: title,
      description: description
    });

    // Once the data has been sent, empty the data.
    setTitle('');
    setDescription('');
  };

  return (
    <div className="">
      <form className="bg-slate-800 p-10 mb-4 mx-auto rounded-md" 
        onSubmit={handleSubmit} 
        style={{ display:"flex", flexDirection:"column", maxWidth:"20%" }}>
          <h1 className="text-2xl font-bold text-white mb-3">Create a new task</h1>
        <input
          type="text"
          name="taskInput"
          id="taskInput"
          placeholder="Type your task"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          // Equalize the input data when data is dumped
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 outline-none rounded-md"
          />
        <textarea
          placeholder="Write the task's description..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          // Equalize the input data when data is dumped
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 outline-none rounded-md"
        >
        </textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Save</button>
    </form>
    </div>
  );
}
