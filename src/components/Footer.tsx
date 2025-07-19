import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm opacity-70 mb-4">
          © 2023 Agnni Predictions. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            Privacy Policy
          </a>
          <span className="text-white/50">|</span>
          <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
