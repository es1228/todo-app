import { ChangeEvent, MouseEvent } from "react";
import TextBox from "./TextBox";
import Button from "./Button";

type AddTaskContainerProps = {
	handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
	handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
	inputText: string;
};

export default function AddTaskContainer(props: AddTaskContainerProps) {
	return (
		<>
			<div className="mr-auto ml-auto flex w-3xl flex-row items-center justify-center gap-4 rounded-lg p-2">
				<TextBox
					text="Enter a Task..."
					value={props.inputText}
					onChange={props.handleInput}
				/>
				<Button text="Add" type="Normal" onClick={props.handleClick} />
			</div>
		</>
	);
}
