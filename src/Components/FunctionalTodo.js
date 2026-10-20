import React, { useState } from "react";
import { FaPen, FaSearch, FaTrash } from "react-icons/fa";
import { IoLogoPlaystation } from "react-icons/io";
import { useSelector } from "react-redux";

function FunctionalTodo() {
  const [inputTask, setInputTask] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [list, setList] = useState([]);
  console.log("list: ", list);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTask = () => {
    if (inputTask.trim() !== "") {
      setList([...list, inputTask]);
      setInputTask("");
    }
  };

  const filteredTasks = searchQuery
    ? list.filter((task) =>
        task.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : list;

  const handleEditTask = (index) => {
    setEditTask(index);
    setInputTask(list[index]);
  };

  const handleUpdateTask = () => {
    if (inputTask.trim() !== "") {
      const updateTask = list.map((item, index) =>
        index === editTask ? inputTask : item,
      );
      setList(updateTask);
      setEditTask(null);
      setInputTask("");
    }
  };

  const handleDeleteTask = (indexToDelete) => {
    // .filter() already returns a new array, no need for [... ]
    setList(list.filter((_, i) => i !== indexToDelete));
  };

  return (
    <>
      {/* Title Centering & Styling */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center my-8">
          <h1 className="text-6xl font-extrabold text-gray-800 tracking-tight">
            Cred App
          </h1>
        </div>

        {/* Input & Button Container */}
        <div className="container mx-auto max-w-md px-4 mb-4">
          <div className="flex gap-2 shadow-2xl">
            {/* Fixed typo 'border-gray-950r' -> 'border-gray-300' and added subtle focus rings */}
            <input
              type="text"
              placeholder="Add a new task..."
              maxLength={35}
              className="bg-gray-50 text-gray-900 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={inputTask}
              onChange={(e) => {
                setInputTask(e.target.value);
              }}
            />
            {/* Added layout, spacing, and hover classes to the button */}
            <button
              onClick={editTask !== null ? handleUpdateTask : handleAddTask}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition-colors duration-200 whitespace-nowrap"
            >
              {editTask !== null ? "Update Task" : "Add Task"}
            </button>
          </div>
        </div>

        <div className="bg-[#d8d8d8] container p-8 rounded-xl max-w-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center  ">
            <div className="relative min-w-full">
              <input
                type="text"
                className="bg-gray-50 text-gray-900 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* {ALL TASK LIST} */}

          {filteredTasks.map((item, index) => {
            return (
              <div
                className="flex items justify-between px-3 py-2 bg-gray-950 mt-2 rounded-lg "
                key={index}
              >
                <p className="text-white text-wrap w-80 font-mono text-start">
                  {item}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditTask(index)}
                    className="bg-[#ffb200]  px-3 py-2 rounded-lg transform hover:scale-105 transition-all duration-100"
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="bg-[#ff0000] px-3 py-2 rounded-lg transform hover:scale-105 transition-all duration-100"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 mb-1 flex justify-center">
        <div className="font-mono text-xs font-bold bg-[#ffb200] rounded-lg w-96 p-2 text-white text-center">
          <span className="text-gray-950">Designed </span>
          <span className="underline text-red-800">By Reyansh</span>
        </div>
      </div>
    </>
  );
}

export default FunctionalTodo;
