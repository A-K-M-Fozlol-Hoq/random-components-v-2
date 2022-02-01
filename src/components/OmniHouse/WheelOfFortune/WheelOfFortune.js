import React, { useState } from 'react';
import './WheelOfFortune.css';
const WheelOfFortune = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const { items } = props;

  const wheelVars = {
    '--nb-item': items.length,
    '--selected-item': selectedItem,
  };
  const spinning = selectedItem !== null ? 'spinning' : '';

  return (
    <div className="wheel-container">
      <div
        className={`wheel ${spinning}`}
        style={wheelVars}
        onClick={() => setSelectedItem(1)}
      >
        {items.map((item, index) => (
          <div
            className="wheel-item"
            key={index}
            style={{ '--item-nb': index }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WheelOfFortune;
