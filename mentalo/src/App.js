
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* Your other components/content */}
      <div className="contact-button text-center">
        <button className="bg-blue-500 text-lg hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default App;


