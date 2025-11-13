import React, { useState, useEffect } from "react";

function App() {
  const [showGreeting, setShowGreeting] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
      setShowOptions(true);
    }, 2000); // Show greeting for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white transition-all duration-700">
      
      {/* Greeting */}
      <h1
        className={`text-4xl font-bold mb-8 transition-all duration-700 
          ${showGreeting ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      >
        Hello Saif 👋
      </h1>

      {/* Options Grid */}
      {showOptions && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 max-w-3xl opacity-0 animate-fadeIn">
          <div className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-gray-700 transition cursor-pointer">
            📅
            <h2 className="text-xl font-semibold mt-2">Assignments Calendar</h2>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-gray-700 transition cursor-pointer">
            🧪
            <h2 className="text-xl font-semibold mt-2">Test Calendar</h2>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl text-center hover:bg-gray-700 transition cursor-pointer">
            📚
            <h2 className="text-xl font-semibold mt-2">Courses</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
