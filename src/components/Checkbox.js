import React, { useState } from 'react';

function MyCheckbox({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <label className="mb-0 fw-bold">{label}</label>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          hidden
          checked={isChecked}
          onChange={() => setIsChecked(prev => !prev)}
        />
        <span></span>
      </label>
    </div>
  );
}

export default MyCheckbox;
