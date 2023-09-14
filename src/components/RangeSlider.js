import React from 'react';

function RangeSlider({ min, max, name, labelPrefix, toFixed=0, step=1, value, onChange }) {
  return (
    <div className="range-slider mb-4">
      <label htmlFor={name} className="range-slider-label">{labelPrefix}: {parseFloat(value).toFixed(toFixed)}</label>
      <div className="slider-container">
        <span>{min == 0 ? 0 : parseFloat(min).toFixed(toFixed)}</span>
        <input
          type="range"
          id={name}
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
        />
        <span>{parseFloat(max).toFixed(toFixed)}</span>
      </div>
    </div>
  );
}

export default RangeSlider;
