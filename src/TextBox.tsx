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
            className="bg-neutral-50/30 dark:bg-neutral-950/30 backdrop-blur-lg outline-0 text-black dark:text-white rounded-lg p-4
            lg:min-w-2xl md:min-w-xl min-w-lg"
            value={props.value}
            onChange={props.onChange}></input>
        </>
    )
}