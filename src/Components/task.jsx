function Task ({ task }) {

    const { tittle, completed } = task

    return (
        <div className="flex items-center justify-between p-4 bg-purple-100 border-solid border-purple-300"> 
            <div className="flex items-center">
                {
                    completed ? (
                        <div className="bg-green-600 p-1 rounded-full cursor-pointer" > 
                            <img className="h-4 w-4" src="/check-icon.svg" alt="CheckIcon" />
                        </div>
                    ) : (
                        <span className="border-solid border border-purple-900 rounded-full p-3 cursor-pointer"> </span>
                    )
                    }

            <p className={"px-2 pl-3" + (completed && "line-through")}> 
             {task.tittle}
            </p>
            </div>
            <img className="h-5 w-5 cursor-pointer transition-all duration-300 case-in" src="/close-icon.svg" alt="CloseIcon" />
        </div>
    ) 
    }
    
    export default Task;