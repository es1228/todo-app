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
			<div className="mx-auto flex flex-row items-center justify-center w-full max-w-[95%] md:w-2xl lg:w-3xl gap-4 rounded-lg p-2">
				<TextBox
					text="Enter a Task..."
					value={props.inputText}
					onChange={props.handleInput}
				/>
				<Button text="Add" onClick={props.handleClick} />
			</div>
		</>
	);
}
