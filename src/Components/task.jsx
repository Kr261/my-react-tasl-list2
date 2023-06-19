// Task.js
import React, { useState } from 'react';
import { HiTrash } from 'react-icons/hi';
import { BsCheck2Circle } from 'react-icons/bs';
import { FiEdit3 } from 'react-icons/fi';

function Task({ task, deleteTask, updateTask }) {
  const { id, title, completed } = task;
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = () => {
    const updatedTask = {
      completed: !completed
    };
    updateTask(id, updatedTask);
  };

  //falta validar si el usuario esta seguro de eliminar la tarea. 

  const handleDeleteClick = () => {
    deleteTask(id);
  };

  const handleUpdateClick = () => {
    if (isEditing) {
      const updatedTask = {
        title: updatedTitle
      };
      updateTask(id, updatedTask);
    }
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (event) => {
    setUpdatedTitle(event.target.value);
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleUpdateClick();
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-purple-100 border-solid border-purple-300">
      <div className="flex items-center">
        {completed ? (
          <div
            className="bg-green-600 p-1 rounded-full cursor-pointer"
            onClick={handleCheckboxChange}
          >
            <div>
              <BsCheck2Circle />
            </div>
          </div>
        ) : (
          <span
            className="border-solid border border-purple-900 rounded-full p-3 cursor-pointer"
            onClick={handleCheckboxChange}
          ></span>
        )}
        {isEditing ? (
          <input
            type="text"
            className="focus: shadow-lg font-inter focus:shadow-purple-400 bg-purple-100 text-purple-900 pl-6 w-full py-1 rounded-xl outline-none transition-all duration-300 ease-in-out "
            value={updatedTitle}
            onChange={handleTitleChange}
            onKeyDown={handleKeyPress}
          />
        ) : (
          <p className={`px-2 pl-3 ${completed && "line-through"}`}>{title}</p>
        )}
      </div>
      <div>
        <button
          className="h-5 w-5 cursor-pointer transition-all duration-300 case-in"
          name="update"
          onClick={handleUpdateClick}
        >
          <FiEdit3 />
        </button>
        <button
          className="h-5 w-5 cursor-pointer transition-all duration-300 case-in"
          name="Delete"
          onClick={handleDeleteClick}
        >
          <HiTrash />
        </button>
      </div>
    </div>
  );
}

export default Task;

