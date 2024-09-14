import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Diary.css';
import calorieData from '../data/calorieData.json';

const Diary = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');
  const [entries, setEntries] = useState([]);

  const calendarRef = useRef(null);

  const handleAddEntry = () => {
    if (product && grams) {
      setEntries([...entries, { product, grams }]);
      setProduct('');
      setGrams('');
    }
  };

  const handleRemoveEntry = index => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  const handleClickOutside = event => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = date => {
    // Format the date as DD-MM-YYYY
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="diary-page">
      <div className="calendar-container">
        <span className="selected-date">{formatDate(date)}</span>
        <button onClick={() => setShowCalendar(!showCalendar)}>
          Select Date
        </button>
        {showCalendar && (
          <div ref={calendarRef} className="calendar-wrapper">
            <Calendar onChange={setDate} value={date} />
          </div>
        )}
      </div>
      <div className="entry-form">
        <input
          type="text"
          placeholder="Enter product name"
          value={product}
          onChange={e => setProduct(e.target.value)}
        />
        <input
          type="number"
          placeholder="Grams"
          value={grams}
          onChange={e => setGrams(e.target.value)}
        />
        <button className="add-btn" onClick={handleAddEntry}>
          +
        </button>
      </div>
      <ul className="entries-list">
        {entries.map((entry, index) => (
          <li key={index}>
            {entry.product} - {entry.grams}g
            <button
              className="remove-btn"
              onClick={() => handleRemoveEntry(index)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diary;
