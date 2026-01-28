import TaskDetails from "./TaskDetails"
import Button from "./Button"
import { Task } from "./TodoApp"

type TaskContainerProps = {
    tasks : Task[],
    handleDelete : (id : number) => void,
    handleEdit : (id : number) => void,
}

export default function TaskContainer(props : TaskContainerProps) {
    const todoItems = props.tasks.map(task => 
        <div key={task.id} className="flex flex-row justify-center items-center mt-4 gap-4">
            <TaskDetails text={task.text}/>
            <Button text="Edit" onClick={() => props.handleEdit(task.id)}/>
            <Button text="Delete" onClick={() => props.handleDelete(task.id)}/>
        </div>
    )
    return (
        <>
            {todoItems}
        </>
    )
}