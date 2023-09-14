import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';

function MyDropdown({ label, options }) {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <label className="mb-0 fw-bold">{label}:</label>
      <Dropdown onSelect={(e) => setSelectedValue(e)}>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          {selectedValue || 'Level 1'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map(option => (
            <Dropdown.Item key={option.level} eventKey={option.level}>
              {option.level}: {option.description}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default MyDropdown;