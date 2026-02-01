import { ChangeEvent } from "react";

type CheckBoxProps = {
	handleClick: (event: ChangeEvent<HTMLInputElement>) => void;
	isChecked: boolean;
};

export default function CheckBox(props: CheckBoxProps) {
	return (
		<>
			<label>
				<input
					type="checkbox"
					checked={props.isChecked}
					onChange={props.handleClick}
					className="hidden"
				/>
				<div className="size-6 text-center rounded-lg bg-neutral-50/30 backdrop-blur-lg  dark:bg-neutral-950/30">
                    {(props.isChecked) ? "✔️" : ""}
                </div>
			</label>
		</>
	);
}
