import React from 'react';
import './WheelOfFortune.css';
const WheelOfFortune = () => {
  return (
    <div className="wheel-of-fortune-wrapper">
      <div className="arrow"></div>
      <ul className="circle">
        <li>
          <div className="text">
            <p>1 0 % M A</p>
          </div>
        </li>
        <li>
          {/* <div className="text" contenteditable="true" spellcheck="false"> */}
          <div className="text">
            <p>R K E T P L</p>
            <img
              style={{
                height: '40px',
                width: '30px',
                marginLeft: '20px',
              }}
              src="https://www.upwork.com/profile-portraits/c124nS36A7PEIbdgNwBaVjVjkq3I6oCCaYL-dUkmfzh9Us6nyPFZWltZoNl0ZsBiAO"
              alt=""
            />
          </div>
        </li>
        <li>
          <div className="text">
            <p>A C E D I S</p>
          </div>
        </li>
        <li>
          <div className="text">
            <p>C O U N T</p>
          </div>
        </li>

        <li>
          <div className="text">1</div>
        </li>
        <li>
          <div className="text">1</div>
        </li>
        <li>
          <div className="text">1</div>
        </li>
        <li>
          <div className="text">1</div>
        </li>

        <li>
          <div className="text">1</div>
        </li>
        <li>
          <div className="text">1</div>
        </li>
        <li>
          <div className="text">1</div>
        </li>
        <li>
          <div className="text">1</div>
        </li>
      </ul>
    </div>
  );
};

export default WheelOfFortune;
