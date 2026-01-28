import { ChangeEvent } from "react"
import Button from "./Button"
import TextBox from "./TextBox"

type DialogProps = {
    text: string,
    handleClose: () => void,
    handleEdit: () => void,
    handleInput : (event : ChangeEvent<HTMLInputElement>) => void,
    isOpen: boolean,
    inputText : string
}

export default function Dialog(props : DialogProps) {
    if (props.isOpen) {
        return (
            <>
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-200/30 dark:bg-neutral-950/30 backdrop-blur-lg
                ml-auto mr-auto">
                    <div className=" bg-slate-200/30 dark:bg-neutral-950/30 rounded-lg backdrop-blur-lg">
                        <h1 className="text-2xl m-4">{props.text}</h1>
                        <div className="flex flex-row gap-4 m-4">
                            <TextBox text="Enter new name..." value={props.inputText} onChange={props.handleInput}/>
                            <Button text="Cancel" onClick={props.handleClose}/>
                            <Button text="Save" onClick={props.handleEdit}/> 
                        </div>
                    </div>
                </div>              
            </>
        )
    }
}