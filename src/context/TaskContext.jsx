import { createContext } from "react";
import { useState,useEffect } from "react";
import { tasks as data } from "../data/Tasks";


// The imported function 'createContext()' returns an object wich contains de data
// Its the context name
export const TaskContext = createContext();

// The main container or "context" should be named whith the "Provider" suffix
export function TaskContextProvider(props){

    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        setTasks(data);
    },[]);

     /**
     * The function is declared in the parent component since it does have access to the data array 'tasks'.
     * @param {task} object : title and description of the task 
     */
    function createTask(task){
        // "...tasks" copies all current array elements and adds a new object "task".
        setTasks([...tasks, {
        id: tasks.length,
        title: task.title,
        description: task.description
        }])
    }

    /**
     * The function is declared in the parent component since it does have access to the data array 'tasks'.
     * Delete a task by id.
     * @param {taskId} int : task id
     */
    function deleteTask(taskId){
        // Iterate the array and filter the element by a condition, if true the element is kept otherwise the element is removed.
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    return(
        <TaskContext.Provider value={{ 
            tasks,
            createTask,
            deleteTask
         }}>
            {/* The 'children' property specifies that all components within it will be a child component. */}
            {props.children}
        </TaskContext.Provider>
    )
}
// Exports are individual so that we know what we import