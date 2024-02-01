import React, { useState, useEffect } from 'react';
import { CalendarStyle, ContentPopover } from './MonthStatsTable.styled';
import icons from '../../img/icons.svg';
import { Popover } from '@mui/material';
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const MounthStatsTable = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [waterData, setWaterData] = useState([]);

  useEffect(() => {
    const { start, end } = getMonthBounds(currentDate);
    const generatedWaterData = generateWaterData(start, end);

    setWaterData(generatedWaterData);
  }, [currentDate]);

  const handleChangeMonth = offset => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + offset));
  };

  const generateWaterData = (start, end) => {
    const waterData = [];
    const dates = eachDayOfInterval({ start, end });
    for (let date of dates) {
      const water = Math.floor(Math.random() * 3 + 1);
      const goal = Math.floor(Math.random() * 2.5 + 1.5);
      const quantity = Math.floor(water / 0.25);
      const progress = Math.round((water / goal) * 100);
      const waterInfo = {
        date,
        water,
        goal,
        progress,
        quantity,
      };
      waterData.push(waterInfo);
    }
    return waterData;
  };

  const getBorderStyle = percentage => {
    if (percentage < 100) {
      return 'border';
    }
  };

  const getMonthBounds = date => {
    return {
      start: startOfMonth(date),
      end: endOfMonth(date),
    };
  };

  const getMonthDays = date => {
    const { start, end } = getMonthBounds(date);

    return eachDayOfInterval({ start, end });
  };

  const renderWaterModal = date => {
    const dateText = date.textContent;

    const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), dateText);

    const waterInfo = waterData.find(
      item => format(item.date, 'yyyy-MM-dd') === format(dateObj, 'yyyy-MM-dd')
    );
    if (waterInfo) {
      return (
        <ContentPopover className="popoverContent">
          <p className="datePopover">{format(dateObj, 'd,MMMM')}</p>
          <p className="datePopoverText">
            Daily norma: <span className="popoverColorText">{waterInfo.goal}L</span>
          </p>
          <p className="datePopoverText">
            Fulfillment of the daily norm:{' '}
            <span className="popoverColorText">{waterInfo.progress}%</span>
          </p>
          <p className="datePopoverText">
            How many servings of water:{' '}
            <span className="popoverColorText">{waterInfo.quantity}</span>
          </p>
          <button className="closeBtnPopover" onClick={() => setSelectedDate(null)}>
            <svg width="14" height="14">
              <use href={icons + '#icon-close-day-details'}></use>{' '}
            </svg>
          </button>
        </ContentPopover>
      );
    } else {
      return (
        <ContentPopover className="popoverContent">
          <h3>{format(dateObj, 'd MMMM yyyy')}</h3>
          <p>No information</p>
          <button className="closeBtnPopover" onClick={() => setSelectedDate(null)}>
            <svg width="14" height="14">
              <use href={icons + '#icon-close-day-details'}></use>{' '}
            </svg>
          </button>
        </ContentPopover>
      );
    }
  };

  return (
    <CalendarStyle>
      <div className="header">
        <span className="sectionText">Mounth</span>
        <div className="mounthNav">
          <button className="navBtn" onClick={() => handleChangeMonth(-1)}>
            <svg width="14" height="14">
              <use href={icons + '#icon-arrow-left'}></use>
            </svg>
          </button>
          <h2 className="dateText">{format(currentDate, 'LLLL, yyyy')}</h2>
          <button className="navBtn" onClick={() => handleChangeMonth(1)}>
            <svg width="14" height="14">
              <use href={icons + '#icon-arrow-right'}></use>{' '}
            </svg>
          </button>
        </div>
      </div>
      <ul className="month">
        <Popover
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          id="alex"
          open={Boolean(selectedDate)}
          anchorEl={selectedDate}
          onClose={() => setSelectedDate(null)}
          PaperProps={{ elevation: 3 }}
          transitionDuration={{ enter: 500, exit: 500 }}
        >
          {selectedDate && renderWaterModal(selectedDate)}
        </Popover>
        {getMonthDays(currentDate).map(date => (
          <li key={format(date, 'yyyy-MM-dd')} className="day">
            <button
              className={`calendarDayBtn ${getBorderStyle(
                waterData.find(
                  item => format(item.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                )?.progress
              )}`}
              onClick={e => setSelectedDate(e.target)}
            >
              {format(date, 'd')}
            </button>
            <p className="progressWaterText">
              {waterData.find(
                item => format(item.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
              )?.progress || 0}
              %
            </p>
          </li>
        ))}
      </ul>
    </CalendarStyle>
  );
};

export default MounthStatsTable;
