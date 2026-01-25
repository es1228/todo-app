import { useState } from 'react';


export default function TodoApp() {
  // define a task type
type Task = {
  id : number,
  text : string,
  completed : boolean
}

// define a task list
const [tasks, setTasks] = useState<Task[]>([]);

// header component
function Header() {
    return (
        <>
            <div className="flex items-center justify-center mt-4">
                <h1 className="font-bold color: black dark:color: white mb-10 text-4xl">Todo App</h1>
            </div>
        </>
    )
}

// add task container
function AddTaskContainer() {
    // variable to store the input text
    const [inputText, setInputText] = useState("");

    // add a new task
    const handleAddTask = () => {
        if (inputText.length > 0)
        {
            const newTask : Task = {id: Date.now(), text: inputText, completed: false}
            setTasks(t => [...t, newTask]);
            setInputText("");
        }
    }

    return (
        <>
            <div className='flex flex-row gap-4 items-center justify-center'>
                <div>
                    <input type="text" placeholder="Enter a Task..." 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="bg-slate-200 dark:bg-stone-900 text-color:black dark:text-color: white rounded-lg p-4
                    lg:min-w-2xl md:min-w-xl min-w-lg"></input>
                </div>
                <div>
                    <button type="submit" className="p-4 rounded-lg bg-slate-200 dark:bg-stone-900 
                    text-color:black dark:text-color: white hover:cursor-pointer"
                    onClick={handleAddTask}>
                            ➕
                        </button>
                </div>
            </div>
        </>
    )
}

// task info
function TaskContainer() {
    const TaskItems = tasks.map(task => 
        <div key={task.id} className="flex flex-row justify-center items-center mt-4 gap-4">
            <div className="bg-slate-200 dark:bg-stone-900 text-color:black dark:text-color: white rounded-lg p-4
                lg:min-w-2xl md:min-w-xl min-w-lg">
                    <p className="text-lg">{task.text}</p>
            </div>
            <EditButton/>
            <DeleteButton/>
        </div>
    )
    return (
        <>
            {TaskItems}
        </>
    )
}

// delete button
function DeleteButton() {
    return (
        <>
            <div>
                <button type="submit" className="p-4 rounded-lg bg-slate-200 dark:bg-stone-900 
                text-color:black dark:text-color: white hover:cursor-pointer">🗑️</button>
            </div>
        </>
    )
}

// edit button
function EditButton() {
    return (
        <>
            <div>
                <button type="submit" className="p-4 rounded-lg bg-slate-200 dark:bg-stone-900 
                text-color:black dark:text-color: white hover:cursor-pointer">🖊️</button>
            </div>
        </>
    )
}

  // layout
  return (
    <>
        <Header/>
        <AddTaskContainer/>
        <TaskContainer/>
    </>
  )
}

