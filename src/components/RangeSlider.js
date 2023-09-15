import React, { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';

function RangeSlider({ min, max, name, labelPrefix, toFixed=0, step=1, value, onChange }) {
  
  // Internal state to keep track of the immediate slider value
  const [sliderValue, setSliderValue] = useState(value);
  
  // Debounced function to call the passed onChange prop
  const debouncedChange = useCallback(
    debounce((value) => onChange(value), 100),
    [onChange]
  );

  // Handle slider's change
  const handleSliderChange = (e) => {
    const newValue = parseFloat(e.target.value);
    setSliderValue(newValue);  // Set the immediate value
    debouncedChange(newValue); // Call the debounced function
  };

  return (
    <div className="range-slider mb-4">
      <label htmlFor={name} className="range-slider-label">{labelPrefix}: {parseFloat(sliderValue).toFixed(toFixed)}</label>
      <div className="slider-container">
        <span>{min == 0 ? 0 : parseFloat(min).toFixed(toFixed)}</span>
        <input
          type="range"
          id={name}
          name={name}
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <span>{parseFloat(max).toFixed(toFixed)}</span>
      </div>
    </div>
  );
}

export default RangeSlider;
