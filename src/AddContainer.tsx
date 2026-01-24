import TextBox from "./TextBox";
import AddButton from "./AddButton";

export default function AddContainer() {
    return (
        <>
            <div className="flex flex-row justify-center items-center">
                <TextBox/>
                <AddButton/>
            </div>
        </>
    )
}