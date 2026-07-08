import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { id: 1, label: 'Dashboard', icon: '📊' },
    { id: 2, label: 'Projects', icon: '📁' },
    { id: 3, label: 'Settings', icon: '⚙️' },
    { id: 4, label: 'Profile', icon: '👤' },
  ];

  return (
    <aside className="flex flex-col h-screen w-64 bg-gray-900 text-gray-100">
      <div className="flex items-center justify-center h-16 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">BOSS</h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <p className="text-sm text-gray-500">© 2024 BOSS</p>
      </div>
    </aside>
  );
};

export default Sidebar;