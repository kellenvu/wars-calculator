import React from 'react';

function ModeToggle({ mode, setMode }) {
  return (
    <div className="text-center mt-3">
      <div className="mode-toggle">
        <div className={`toggle-highlight ${mode === 'number' ? 'active' : ''}`}></div>
        <button 
          className={`toggle-btn ${mode === 'percentage' ? 'active' : ''}`} 
          onClick={() => setMode('percentage')}
        >
          Proportion
        </button>
        <button 
          className={`toggle-btn ${mode === 'number' ? 'active' : ''}`} 
          onClick={() => setMode('number')}
        >
          Number
        </button>
      </div>
    </div>
  );
}

export default ModeToggle;
