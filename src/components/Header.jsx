import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-indigo-600">TaskFlow</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#dashboard"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#tasks"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
                >
                  Tasks
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#settings"
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium"
                >
                  Settings
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;