import DatePicker from "./DatePicker"
import PriorityLabel from "./PriorityLabel"
import Button from "./Button"
import { Task } from "./TodoApp"

type TaskContainerProps = {
    tasks : Task[],
    handleDelete : (id : number) => void,
    handleEdit : (id : number) => void,
}

export default function TaskContainer(props : TaskContainerProps) {
    const todoItems = props.tasks.map(task => 
        <div key={task.id} className="flex flex-row items-center mt-4 ml-auto mr-auto gap-4
        bg-neutral-50/30 dark:bg-neutral-950/30 
        text-black dark:text-white backdrop-blur-lg p-4 w-4xl rounded-lg">
            <div>
                <p className="text-sm">Name</p>
                <p className="text-lg">{task.text}</p>
            </div>
            <div className="flex flex-row gap-16 items-center ml-auto">
                <div>
                    <p className="text-sm">Due Date</p>
                    <DatePicker/>
                </div>
                <div>
                    <p className="text-sm">Priority</p>
                    <PriorityLabel priorityLevel={task.priority}/>
                </div>
                <div className="flex flex-row gap-4">
                    <Button text="Edit" onClick={() => props.handleEdit(task.id)}/>
                    <Button text="Delete" onClick={() => props.handleDelete(task.id)}/>
                </div>               
            </div>
        </div>
    )
    return (
        <>
            {todoItems}
        </>
    )
}