import Task from "./task";

function TaskList ({ task }) {
    return (
        <div>
        <h2 className="border-solid border bg-purple-900 text-purple-50 border-purple-900 text-3xl font-bold rounded-lg"> Task List </h2> 
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
        </div>
        {task.map( task => {
            return (
                <Task key={task.id} task = {task} />
            )
        })}
        </div>
    )
}

export default TaskList;