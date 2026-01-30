type PriorityLabelProps = {
    priorityLevel : "High" | "Medium" | "Low" | "None" | "",
    onClick : () => void
}

export default function PriorityLabel(props : PriorityLabelProps) {
    const priorityColors = {
        High : "bg-red-500/30 backdrop-blur-lg",
        Medium : "bg-yellow-500/30 backdrop-blur-lg",
        Low : "bg-green-500/30 backdrop-blur-lg",
        None : "bg-neutral-500/30 backdrop-blur-lg",
        "" : ""
    }

    return (
        <>
            <div className={`rounded-lg p-2 ${priorityColors[props.priorityLevel]}`}>
                <p className="text-sm text-center">{props.priorityLevel}</p>
            </div>
        </>
    )
}