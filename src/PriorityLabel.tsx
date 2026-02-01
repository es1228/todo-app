type PriorityLabelProps = {
	priorityLevel: "High" | "Med" | "Low" | "None" | "Done" | "";
	onClick: () => void;
};

export default function PriorityLabel(props: PriorityLabelProps) {
	const priorityColors = {
		High: "bg-red-500/30 backdrop-blur-lg",
		Med: "bg-amber-600/30 backdrop-blur-lg",
		Low: "bg-amber-300/30 backdrop-blur-lg",
		None: "bg-neutral-500/30 backdrop-blur-lg",
        Done: "bg-green-500/30 backdrop-blur-lg",
		"": "",
	};

	return (
		<>
			<div className={`rounded-lg p-2 ${priorityColors[props.priorityLevel]}`}>
				<p className="text-center text-sm">{props.priorityLevel}</p>
			</div>
		</>
	);
}
