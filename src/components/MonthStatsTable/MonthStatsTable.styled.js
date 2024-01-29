import styled from 'styled-components';

export const CalendarStyle = styled.div`
  background-color: var(--bg-color-light-blue);
  @media screen and (min-width: 320px) {
    .header {
      display: flex;
      justify-content: space-between;
      padding-bottom: 16px;
    }
    .sectionText {
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
    }
    .month {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(7, 0.5fr);
      gap: 10px;
    }
    .mounthNav {
      display: flex;
      align-items: center;
    }

    .navBtn {
      display: flex;
      border: none;
      background-color: transparent;
      justify-content: center;
    }

    .dateText {
      color: var(--primery-color-blue);
      width: 130px;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    .calendarDayBtn {
      width: 34px;
      height: 34px;
      border-radius: 20px;
      border: none;
      background-color: var(--primery-color-white);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    .day {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .progressWaterText {
      color: var(--secondary-color-blue);
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

    .border-complete {
      border: 1px solid var(--calendar-color-orange);
    }
  }

  @media screen and (min-width: 768px) {
    .month {
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(4, 0.5fr);
    }
    .sectionText {
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
  }
`;
