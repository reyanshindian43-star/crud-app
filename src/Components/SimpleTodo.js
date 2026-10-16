import React from "react";
import { FaPen, FaSearch, FaTrash } from "react-icons/fa";

function SimpleTodo() {
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
              className="bg-gray-50 text-gray-900 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            {/* Added layout, spacing, and hover classes to the button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition-colors duration-200 whitespace-nowrap">
              Add Task
            </button>
          </div>
        </div>

        <div className="bg-[#d8d8d8] container p-8 rounded-xl max-w-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center justify-center  ">
            <div className="relative min-w-full">
              <input
                type="text"
                className="bg-gray-50 text-gray-900 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <div className="flex items justify-between px-3 py-2 bg-gray-950 mt-2 rounded-lg ">
            <p className="text-white text-wrap w-80 font-mono text-start">
              Add New Task
            </p>
            <div className="flex space-x-2">
              <button className="bg-[#ffb200]  px-3 py-2 rounded-lg transform hover:scale-105 transition-all duration-100">
                <FaPen />
              </button>
              <button className="bg-[#ff0000] px-3 py-2 rounded-lg transform hover:scale-105 transition-all duration-100">
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 inset-xs mb-1 flex justify-center">
        <div className="font-mono text-xs font-bold bg-[#ffb200] rounded-lg w-96 p-2 text-white">
          <span className="text-gray-950">Designed </span>
          <span className="underline text-red-800"> By Reyansh</span>
        </div>
      </div>
    </>
  );
}

export default SimpleTodo;
