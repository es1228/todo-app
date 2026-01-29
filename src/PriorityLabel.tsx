type PriorityLabelProps = {
    priorityLevel : "High" | "Medium" | "Low" | "None"
}

export default function PriorityLabel(props : PriorityLabelProps) {
    const priorityColors = {
        High : "bg-red-500/30 backdrop-blur-lg",
        Medium : "bg-yellow-500/30 backdrop-blur-lg",
        Low : "bg-green-500/30 backdrop-blur-lg",
        None : "bg-neutral-500/30 backdrop-blur-lg"
    }

    return (
        <>
            <div className={`text-center rounded-lg p-2 ${priorityColors[props.priorityLevel]}`}>
                <p className="text-sm">{props.priorityLevel}</p>
            </div>
        </>
    )
}