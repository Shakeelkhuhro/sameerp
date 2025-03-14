import React from "react";

function DarkModeToggle() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 bg-gray-300 dark:bg-gray-700 rounded">
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeToggle;
