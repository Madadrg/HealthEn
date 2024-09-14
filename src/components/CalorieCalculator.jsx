import React, { useState } from 'react';
import './CalorieCalculator.css'; // Ensure this file exists

export const CalorieCalculator = () => {
  console.log('CalorieCalculator rendered'); // Debugging line

  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Calculate your daily calorie intake right now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="column">
            <label>Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={e => setHeight(e.target.value)}
            />
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={e => setAge(e.target.value)}
            />
            <label>Current Weight (kg):</label>
            <input
              type="number"
              value={currentWeight}
              onChange={e => setCurrentWeight(e.target.value)}
            />
          </div>
          <div className="column">
            <label>Desired Weight (kg):</label>
            <input
              type="number"
              value={desiredWeight}
              onChange={e => setDesiredWeight(e.target.value)}
            />
            <label>Blood Type:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="1"
                  checked={bloodType === '1'}
                  onChange={e => setBloodType(e.target.value)}
                />{' '}
                1
              </label>
              <label>
                <input
                  type="radio"
                  value="2"
                  checked={bloodType === '2'}
                  onChange={e => setBloodType(e.target.value)}
                />{' '}
                2
              </label>
              <label>
                <input
                  type="radio"
                  value="3"
                  checked={bloodType === '3'}
                  onChange={e => setBloodType(e.target.value)}
                />{' '}
                3
              </label>
              <label>
                <input
                  type="radio"
                  value="4"
                  checked={bloodType === '4'}
                  onChange={e => setBloodType(e.target.value)}
                />{' '}
                4
              </label>
            </div>
          </div>
        </div>
        <button type="submit">Start losing weight</button>
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Your recommended daily calorie intake is 2800 calories</h3>
            <p>Foods you should not eat:</p>
            <ol>
              <li>Flour products</li>
              <li>Milk</li>
              <li>Red meat</li>
              <li>Smoked meats</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};
