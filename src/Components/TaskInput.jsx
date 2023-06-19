import { useState } from "react";
import Task from "./task";

function TaskInput ({ addTask }) {

    const[tittle, setTittle] = useState ("")

    const handleTaskEnter = (e) => {
        if (e.key.toLowerCase() === "enter") {
            addTask(tittle)
            setTittle("")
        }
    }
    const handelTaskButton = (e) => {
        addTask(tittle)
        setTittle("")
     }

    return (
    <div className="mt-3 relative py-4 flex flex-col items-center"> 
      <input
      type="text"
      name="enviar"
      className="focus: shadow-lg font-inter focus:shadow-purple-400 bg-purple-100 text-purple-900 pl-12 w-full py-3 rounded-xl outline-none transition-all duration-300 ease-in-out "
      placeholder="What's your mind focus on today?"
      value={tittle}
      onChange={e => setTittle(e.target.value)}
      onKeyDown={e => handleTaskEnter(e)}
      />

      <button  onClick={handelTaskButton} type="submit" class="py-2 bg-purple-900 text-purple-50 rounded-lg w-48 mt-3">Add Task </button>
    </div>
    )
}

export default TaskInput;