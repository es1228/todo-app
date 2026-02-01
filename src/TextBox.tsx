import { ChangeEvent } from "react";

type TextBoxProps = {
	text: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function TextBox(props: TextBoxProps) {
	return (
		<>
			<input
				type="text"
				placeholder={props.text}
				className="w-lg max-w-full rounded-lg bg-neutral-50/30 p-4 text-black outline-0 backdrop-blur-lg md:w-xl dark:bg-neutral-950/30 dark:text-white"
				value={props.value}
				onChange={props.onChange}
			></input>
		</>
	);
}
