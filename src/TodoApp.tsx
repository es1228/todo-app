import { useState, useEffect, ChangeEvent } from "react";
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
	priority: "High" | "Med" | "Low" | "None" | "Done" | "";
};

export default function TodoApp() {
	const [tasks, setTasks] = useState<Task[]>(() => {
		const storedTasks = localStorage.getItem("todo-tasks");
		return storedTasks ? JSON.parse(storedTasks) : [];
	});
	const [inputText, setInputText] = useState<string>("");
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);
	const [editText, setEditText] = useState<string>("");
	const [editPriority, setEditPriority] = useState<Task["priority"]>("None");
	const [editId, setEditId] = useState<number>(0);
	const today: string = new Date().toISOString().split("T")[0];

	useEffect(() => {
		localStorage.setItem("todo-tasks", JSON.stringify(tasks));
	}, [tasks]);

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
				dueDate: today,
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
		const originalPriority: Task["priority"] =
			tasks.find((t) => t.id === id)?.priority ?? "";
		setEditPriority(originalPriority);
	};

	const onEdit = () => {
		if (editText.length > 0) {
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
		}
	};

	const onDate = (id: number, dueDate: string) => {
		setTasks((t) =>
			t.map((task) => {
				if (task.id === id) {
					return { ...task, dueDate: dueDate };
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

	const setStatus = (id: number) => {
		setTasks((t) =>
			t.map((task) => {
				if (task.id === id) {
					if (task.completed) {
						return { ...task, completed: !task.completed, priority: "None" };
					}
					return { ...task, completed: !task.completed, priority: "Done" };
				}
				return task;
			}),
		);
	};

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
				onDateChange={onDate}
				handleCheckBoxClick={setStatus}
			/>
			<Dialog
				handleClose={onClose}
				isOpen={dialogOpen}
				handleInput={handleEditInput}
				handleEdit={onEdit}
				inputText={editText}
				priority={editPriority}
				onPriorityChange={(e) =>
					setEditPriority(e.target.value as "High" | "Med" | "Low" | "")
				}
			/>
		</>
	);
}
