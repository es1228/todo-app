import { useState, ChangeEvent } from 'react';
import Header from './Header';
import AddTaskContainer from './AddTaskContainer';
import TaskContainer from './TaskContainer';
import Dialog from './Dialog';

// define a task type
export type Task = {
    id : number,
    text : string,
    completed : boolean
}

export default function TodoApp() {
    // define a task list
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputText, setInputText] = useState<string>("");
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>("");
    const [editId, setEditId] = useState<number>(0);

    const handleInput = (event : ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    }

    const handleEdit = (event : ChangeEvent<HTMLInputElement>) => {
        setEditText(event.target.value);
    }

    const onAdd = () => {
        if (inputText.length > 0) {
            const newTask : Task = {id: Date.now(), text: inputText, completed: false};
            setTasks(t => [...t, newTask]);
            setInputText("");
        }
    }

    const onDelete = (id : number) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    const onClose = () => {
        setDialogOpen(false);
        setEditText("");
    }

    const handleEditClick = (id : number) => {
        setDialogOpen(true);
        setEditId(id);
        const originalText : string = tasks.find(t => t.id === id)?.text ?? "";
        setEditText(originalText);
    }

    const onEdit = () => {
        setTasks(t => t.map(task => {
            if (task.id === editId) {
                return {...task, text: editText};
            }
            return task;
        }))
        setEditId(0);
        setEditText("");
        setDialogOpen(false);
    }

    // layout
    return (
        <>
            <Header/>
            <AddTaskContainer handleInput={handleInput} handleClick={onAdd} inputText={inputText}/>
            <TaskContainer tasks={tasks} handleDelete={onDelete} handleEdit={handleEditClick}/>
            <Dialog text="Edit" 
            handleClose={onClose} isOpen={dialogOpen} handleInput={handleEdit} handleEdit={onEdit}
            inputText={editText}/>
        </>
    )
}

