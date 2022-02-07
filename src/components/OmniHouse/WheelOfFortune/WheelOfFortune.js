import React from 'react';
import './WheelOfFortune.css';
const WheelOfFortune = () => {
  return (
    <div className="wheel-of-fortune-wrapper">
      <ul className="circle">
        <li>
          <div className="text" contenteditable="true" spellcheck="false">
            1
          </div>
        </li>
        <li>
          <div className="text" contenteditable="true" spellcheck="false">
            2
          </div>
        </li>
        <li>
          <div className="text" contenteditable="true" spellcheck="false">
            3
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WheelOfFortune;
