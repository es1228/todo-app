import { useState, ChangeEvent } from "react";
import Header from "./Header";
import AddTaskContainer from "./AddTaskContainer";
import TaskContainer from "./TaskContainer";
import Dialog from "./Dialog";

// define a task type
export type Task = {
	id: number;
	text: string;
	completed: boolean;
	dueDate: string;
	priority: "High" | "Medium" | "Low" | "None" | "";
};

export default function TodoApp() {
	// define variables
	const [tasks, setTasks] = useState<Task[]>([]);
	const [inputText, setInputText] = useState<string>("");
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);
	const [editText, setEditText] = useState<string>("");
    const [editPriority, setEditPriority] = useState<Task["priority"]>("None");
	const [editId, setEditId] = useState<number>(0);

	const handleAddInput = (event: ChangeEvent<HTMLInputElement>) => {
		setInputText(event.target.value);
	};

	const handleEditInput = (event: ChangeEvent<HTMLInputElement>) => {
		setEditText(event.target.value);
	};

	const onAdd = () => {
		if (inputText.length > 0) {
			const newTask: Task = {
				id: Date.now(),
				text: inputText,
				completed: false,
				dueDate: "None",
				priority: "None",
			};
			setTasks((t) => [...t, newTask]);
			setInputText("");
		}
	};

	const onDelete = (id: number) => {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	};

	const onClose = () => {
		setDialogOpen(false);
		setEditText("");
	};

	const handleEditClick = (id: number) => {
		setDialogOpen(true);
		setEditId(id);
		const originalText: string = tasks.find((t) => t.id === id)?.text ?? "";
		setEditText(originalText);
        const originalPriority: Task["priority"] = tasks.find((t) => t.id === id)?.priority ?? "";
        setEditPriority(originalPriority);
	};

	const onEdit = () => {
		setTasks((t) =>
			t.map((task) => {
				if (task.id === editId) {
					return { ...task, text: editText, priority: editPriority };
				}
				return task;
			}),
		);
		setEditId(0);
		setEditText("");
		setDialogOpen(false);
	};

	const handleDialog = () => {
		setDialogOpen(true);
	};

	// layout
	return (
		<>
			<Header />
			<AddTaskContainer
				handleInput={handleAddInput}
				handleClick={onAdd}
				inputText={inputText}
			/>
			<TaskContainer
				tasks={tasks}
				handleDelete={onDelete}
				handleEdit={handleEditClick}
				handleDialog={handleDialog}
			/>
			<Dialog
				handleClose={onClose}
				isOpen={dialogOpen}
				handleInput={handleEditInput}
				handleEdit={onEdit}
				inputText={editText}
                priority={editPriority}
                onPriorityChange={(e) => setEditPriority(e.target.value as "High" | "Medium" | "Low" | "")}
			/>
		</>
	);
}
