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
			<form className="mx-auto flex w-full max-w-[95%] flex-row items-center justify-center gap-4 rounded-lg p-2 md:w-2xl lg:w-3xl">
				<TextBox
					text="Enter a Task..."
					value={props.inputText}
					onChange={props.handleInput}
				/>
				<Button text="Add ➕" onClick={props.handleClick} />
			</form>
		</>
	);
}
