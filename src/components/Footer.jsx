import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} BOSS Orchestration. All rights reserved.
          </p>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;