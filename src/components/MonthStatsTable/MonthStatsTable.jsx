import React, { useState } from 'react';
import { CalendarStyle } from './MonthStatsTable.styled';
import icons from '../../img/icons.svg';

const MounthStatsTable = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const getBorderStyle = percentage => {
    if (percentage >= 70 && percentage <= 100) {
      return 'border-complete';
    }
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const renderCalendar = () => {
    const monthDays = [];
    const totalDays = daysInMonth(currentDate);

    for (let i = 1; i <= totalDays; i += 1) {
      const value = Math.round(Math.random() * 100);

      monthDays.push(
        <li key={`day-${i}`} className="day">
          <button className={`calendarDayBtn ${getBorderStyle(value)}`}>
            {i}
          </button>
          <p className="progressWaterText">{value}%</p>
        </li>
      );
    }

    return monthDays;
  };

  return (
    <CalendarStyle>
      <div className="header">
        <span className="sectionText">Mounth</span>
        <div className="mounthNav">
          <button className="navBtn" onClick={handlePrevMonth}>
            <svg width="14" height="14">
              <use href={icons + '#icon-arrow-left'}></use>
            </svg>
          </button>
          <h2 className="dateText">
            {currentDate.toLocaleString('en-US', {
              month: 'long',
            })}
            , {currentDate.getFullYear()}
          </h2>
          <button className="navBtn" onClick={handleNextMonth}>
            {' '}
            <svg width="14" height="14">
              <use href={icons + '#icon-arrow-right'}></use>
            </svg>
          </button>
        </div>
      </div>
      <ul className="month">{renderCalendar()}</ul>
    </CalendarStyle>
  );
};

export default MounthStatsTable;
