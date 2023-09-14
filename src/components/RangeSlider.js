import React, { useState } from 'react';

function RangeSlider({ min, max, name, labelPrefix, toFixed=0, step=1 }) {
  const [value, setValue] = useState((parseFloat(max) + parseFloat(min)) / 2);

  return (
    <div className="range-slider mb-4">
      <label htmlFor={name} className="range-slider-label">{labelPrefix}: {value.toFixed(toFixed)}</label>
      <div className="slider-container">
        <span>{min == 0 ? 0 : min.toFixed(toFixed)}</span>
        <input
          type="range"
          id={name}
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
        />
        <span>{max.toFixed(toFixed)}</span>
      </div>
    </div>
  );
}


export default RangeSlider;
