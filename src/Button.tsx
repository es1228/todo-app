import { MouseEvent } from "react";

type ButtonProps = {
	text: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function Button(props: ButtonProps) {
	return (
		<>
			<button
				type="submit"
				className="rounded-lg bg-neutral-50/30 p-4 whitespace-nowrap text-black backdrop-blur-lg hover:cursor-pointer dark:bg-neutral-950/30 dark:text-white"
				onClick={props.onClick}
			>
				<p className="text-center text-sm">{props.text}</p>
			</button>
		</>
	);
}
