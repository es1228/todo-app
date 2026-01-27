import { useState, ChangeEvent } from 'react';
import Header from './Header';
import AddTaskContainer from './AddTaskContainer';
import TaskContainer from './TaskContainer';

// define a task type
export type Task = {
    id : number,
    text : string,
    completed : boolean
}

export default function TodoApp() {
    // define a task list
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputText, setInputText] = useState("");

    const handleInput = (event : ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    }

    const onAdd = () => {
        const newTask : Task = {id: Date.now(), text: inputText, completed: false};
        setTasks(t => [...t, newTask]);
        setInputText("");
    }

    const onDelete = (id : number) => {
        const updatedTasks = (tasks.filter(task => task.id !== id));
        setTasks(updatedTasks);
    }

    // layout
    return (
        <>
            <Header/>
            <AddTaskContainer handleInput={handleInput} handleClick={onAdd} inputText={inputText}/>
            <TaskContainer tasks={tasks} handleClick={onDelete}/>
        </>
    )
}

