import DeleteButton from "./DeleteButton";
import TaskInfo from "./TaskInfo";

export default function TaskContainer() {
    return (
        <>
            <div className="flex flex-row justify-center items-center mt-4">
                <TaskInfo/>
                <DeleteButton/>
            </div>
        </>
    )
}