type TaskDetailsProps = {
    text : string
}

export default function TaskDetails(props : TaskDetailsProps) {
    return (
        <>
            <div className="bg-slate-200/30 dark:bg-neutral-950/30 backdrop-blur-lg
            text-black dark:text-white rounded-lg 
            p-4 lg:min-w-2xl md:min-w-xl min-w-lg">
                <p className="text-lg">{props.text}</p>
            </div>
        </>
    )
}