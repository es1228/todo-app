import { ChangeEvent } from "react";
import Button from "./Button";
import TextBox from "./TextBox";

type DialogProps = {
	handleClose: () => void;
	handleEdit: () => void;
	handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
	isOpen: boolean;
	inputText: string;
    priority : string;
    onPriorityChange : (event : ChangeEvent<HTMLSelectElement>) => void;
};

export default function Dialog(props: DialogProps) {
	if (props.isOpen) {
		return (
            <>
                <div className="fixed inset-0 mr-auto ml-auto flex flex-col items-center justify-center bg-slate-200/30 backdrop-blur-lg dark:bg-neutral-950/30">
                    <div className="rounded-lg bg-neutral-50/30 backdrop-blur-lg dark:bg-neutral-950/30">
                        <h1 className="m-4 text-2xl">Edit</h1>
                        <div className="m-4 flex flex-row gap-4 items-center">
                            <div>
                                <p className="text-sm">Priority</p>
                                <select className="outline-0 rounded-lg bg-neutral-50/30 backdrop-blur-lg dark:bg-neutral-950/30 p-4"
                                    value={props.priority}
                                    onChange={props.onPriorityChange}
                                >
                                    <option value="None">None</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                            <div>
                               <p className="text-sm">Task Name</p> 
                               <TextBox
                                    text="Enter new name..."
                                    value={props.inputText}
                                    onChange={props.handleInput}
                                />
                            </div>
                            <div className="flex gap-4 mt-5">
                                <Button
                                    text="Cancel"
                                    onClick={props.handleClose}
                                />
                                <Button text="Save" onClick={props.handleEdit}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
	}
}
