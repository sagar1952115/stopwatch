import React from 'react';

function Modal({ isOpen, onClose, elapsedTime }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 m-4 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-4 uppercase text-gray-900">Elapsed Time</h2>
        <p className="font-mono text-red-500 font-bold text-3xl">{elapsedTime}</p>
        <button 
          className="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
