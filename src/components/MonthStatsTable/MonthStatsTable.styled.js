import styled from 'styled-components';

export const CalendarStyle = styled.div`
  @media screen and (min-width: 320px) {
    .header {
      display: flex;
      justify-content: space-between;
      padding-bottom: 16px;
    }

    .sectionText {
      color: var(--primery-color-black);
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
    .monthNav {
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

    .border {
      border: 1px solid var(--calendar-color-orange);
    }
  }

  @media screen and (min-width: 768px) {
    .month {
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(4, 1fr);
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

export const ContentPopover = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    display: inline-flex;
    padding: 24px 13px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    .closeBtnPopover {
      position: absolute;
      top: 26px;
      right: 13px;
      border: none;
      background-color: transparent;
      display: flex;
      justify-content: center;
    }
    .datePopover {
      color: var(--primery-color-blue);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    .datePopoverText {
      color: var(--primery-color-black);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    .popoverColorText {
      color: var(--primery-color-blue);
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 24px 16px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const LoaderMonthWrapper = styled.div`
  position: relative;
  height: 262px;
`;
