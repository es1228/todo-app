import DatePicker from "./DatePicker";
import PriorityLabel from "./PriorityLabel";
import Button from "./Button";
import { Task } from "./TodoApp";
import CheckBox from "./CheckBox";

type TaskContainerProps = {
	tasks: Task[];
	handleDelete: (id: number) => void;
	handleEdit: (id: number) => void;
	handleDialog: (id: number) => void;
	onDateChange: (id: number, date: string) => void;
	handleCheckBoxClick: (id : number) => void;
};

export default function TaskContainer(props: TaskContainerProps) {
	const todoItems = props.tasks.map((task) => (
		<div
			key={task.id}
			className="mx-auto mt-4 flex w-full max-w-[95%] flex-col items-center gap-4 rounded-lg bg-neutral-50/30 p-4 text-black backdrop-blur-lg md:w-2xl md:flex-row lg:w-4xl dark:bg-neutral-950/30 dark:text-white"
		>
			<CheckBox isChecked={task.completed} handleClick={() => props.handleCheckBoxClick(task.id)}/>
			<div className="flex min-w-0 flex-row gap-8">
				<div>
					<p className="text-sm">Name</p>
					<p
						className={`w-22 truncate text-lg md:w-44 lg:w-88 ${(task.completed) ? "line-through" : ""}`}
						title={task.text}
					>
						{task.text}
					</p>
				</div>
				<div>
					<p className="text-sm">Due Date</p>
					<DatePicker
						onChange={(e) => props.onDateChange(task.id, e.target.value)}
						value={task.dueDate}
					/>
				</div>
			</div>
			<div className="flex flex-row items-center gap-8 md:ml-auto">
				<div>
					<p className="text-sm">Priority</p>
					<PriorityLabel
						priorityLevel={task.priority}
						onClick={() => props.handleDialog(task.id)}
					/>
				</div>
				<div className="flex flex-row gap-4">
					<Button text="Edit 🖊️" onClick={() => props.handleEdit(task.id)} />
					<Button
						text="Delete 🗑️"
						onClick={() => props.handleDelete(task.id)}
					/>
				</div>
			</div>
		</div>
	));
	return <>{todoItems}</>;
}
