import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import {formatTime} from "../common.js"

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
    setIsStopped(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsStopped(true);
    setIsModalOpen(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setIsStopped(false);
  };



  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTime(0);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="p-6 max-w-md mx-auto bg-white  rounded-xl shadow-custom-dark space-y-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 uppercase">Stopwatch</h1>
          <div className="text-4xl font-mono text-gray-700 mt-4">
            {formatTime(time)}
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button 
            className="px-4 py-2 bg-blue-500 text-white shadow-custom rounded hover:bg-blue-700"
            onClick={handleStartPause}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button 
            className="px-4 py-2 bg-red-500 text-white shadow-custom rounded hover:bg-red-700 "
            onClick={handleStop}
            disabled={!isRunning}
          >
            Stop
          </button>
          <button 
            className="px-4 py-2 bg-yellow-500 text-white shadow-custom rounded hover:bg-yellow-700"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        elapsedTime={formatTime(time)} 
      />
    </div>
  );
}

export default Stopwatch;
