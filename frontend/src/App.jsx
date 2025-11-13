import React from "react";

function App() {
  return (
    // Main container div that takes full height of the screen and centers everything
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      
      {/* Heading at the top */}
      <h1 className="text-4xl font-bold mb-8">
        Hello Saif 👋
      </h1>

      {/* A grid that will hold our three clickable boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 max-w-3xl">

        {/* Box 1 - Assignments Calendar */}
        <div className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-gray-700 transition cursor-pointer">
          📅 
          <h2 className="text-xl font-semibold mt-2">
            Assignments Calendar
          </h2>
        </div>

        {/* Box 2 - Test Calendar */}
        <div className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-gray-700 transition cursor-pointer">
          🧪 
          <h2 className="text-xl font-semibold mt-2">
            Test Calendar
          </h2>
        </div>

        {/* Box 3 - Courses (for notes archive) */}
        <div className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-gray-700 transition cursor-pointer">
          📚 
          <h2 className="text-xl font-semibold mt-2">
            Courses
          </h2>
        </div>

      </div>
    </div>
  );
}

export default App;
