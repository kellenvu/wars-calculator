import React from 'react';
import { Dropdown } from 'react-bootstrap';

function MyDropdown({ label, options, value, onChange }) {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <label className="mb-0 fw-bold">{label}:</label>
      <Dropdown onSelect={(e) => onChange(e)}>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          Level {value || 1}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map(option => (
            <Dropdown.Item key={option.level} eventKey={option.level}>
              Level {option.level}: {option.description}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default MyDropdown;
