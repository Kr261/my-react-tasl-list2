import React from 'react';
import Task from './task';

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <div>
      <h2 className="border-solid border bg-purple-900 text-purple-50 border-purple-900 text-3xl font-bold rounded-lg">
        Task List
      </h2>
      <div className="flex flex-col mt-2 rounded-lg overflow-hidden shadow-2xl">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;