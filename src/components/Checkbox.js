import React from 'react';

function MyCheckbox({ label, checked, onChange }) {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <label className="mb-0 fw-bold">{label}</label>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          hidden
          checked={checked}
          onChange={onChange}
        />
        <span></span>
      </label>
    </div>
  );
}

export default MyCheckbox;
