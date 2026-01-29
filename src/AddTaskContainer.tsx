import { ChangeEvent, MouseEvent } from "react"
import TextBox from "./TextBox"
import Button from "./Button"

type AddTaskContainerProps = {
    handleInput : (event : ChangeEvent<HTMLInputElement>) => void,
    handleClick : (event : MouseEvent<HTMLButtonElement>) => void,
    inputText : string
}

export default function AddTaskContainer(props : AddTaskContainerProps) {
    return (
        <>
            <div className='flex flex-row gap-4 items-center justify-center w-3xl rounded-lg p-2 ml-auto mr-auto'>
                <TextBox text="Enter a Task..." value={props.inputText} onChange={props.handleInput}/>
                <Button text="Add" onClick={props.handleClick}/>
            </div>
        </>
    )
}