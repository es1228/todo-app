import { MouseEvent } from "react"

type ButtonProps = {
    text : string,
    onClick : (event : MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props : ButtonProps) {
    return (
        <>
            <button type="submit" className="p-4 rounded-lg bg-slate-200 dark:bg-stone-900 
            text-black dark:text-white hover:cursor-pointer"
            onClick={props.onClick}>
                {props.text}
            </button>
        </>
    )
}