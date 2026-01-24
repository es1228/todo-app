export default function TextBox() {
    return (
        <>
            <div className="textbox">
                <input type="text" placeholder="Enter a Task..." 
                className="bg-slate-200 dark:bg-stone-900 text-color:black dark:text-color: white rounded-lg p-4 m-4 
                lg:min-w-2xl md:min-w-xl min-w-lg"></input>
            </div>
        </>
    )
}