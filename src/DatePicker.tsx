import { ChangeEvent } from "react";

type DatePickerProps = {
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function DatePicker(props: DatePickerProps) {
	return (
		<>
			<input type="date" className="text-lg outline-0" value={props.value} onChange={props.onChange}/>
		</>
	);
}
