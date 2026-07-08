import React from 'react';

const StatCard = ({ label, value }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-gray-600 transition-colors duration-200">
      <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-2">
        {label}
      </p>
      <p className="text-white text-3xl font-bold">
        {value}
      </p>
    </div>
  );
};

export default StatCard;