import { ChangeEvent } from "react"

type TextBoxProps = {
    text : string,
    value : string,
    onChange : (event : ChangeEvent<HTMLInputElement>) => void
}

export default function TextBox(props : TextBoxProps) {
    return (
        <>
            <input type="text" placeholder={props.text} 
            className="bg-slate-200 dark:bg-stone-900 text-black dark:text-white rounded-lg p-4
            lg:min-w-2xl md:min-w-xl min-w-lg"
            value={props.value}
            onChange={props.onChange}></input>
        </>
    )
}