import styled from 'styled-components';
import img from '../../img/bg1.png';

export const TodayWrapper = styled.div`
  margin-bottom: 24px;
`;

export const TodayItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid var(--btn-color-light-blue);
`;

export const TodayInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const TodayTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: var(--primery-color-black);
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const WrapNoList = styled.li`
  margin: 0 auto;
  height: 212px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::before {
    position: absolute;
    content: '|';
    background-image: url(${img});
    height: 212px;
    width: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: contain;
    opacity: 0.1;
  }
`;

export const Forget = styled.div`
  font-size: 20px;
  text-align: center;
  color: var(--primery-color-blue);
  @media (min-width: 700px) and (max-width: 1199px) {
    font-size: 25px;
  }
`;

export const TodayList = styled.ul`
  height: 212px;
  overflow: auto;
`;

export const TodayVolume = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--primery-color-blue);
  margin-right: 16px;
`;

export const TodayTime = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  color: var(--primery-color-black);
`;

export const IconGlass = styled.svg`
  width: 26px;
  height: 26px;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const TodayTools = styled.div`
  display: flex;
  gap: 18px;
`;

export const ButtonChange = styled.button`
  background-color: transparent;
  padding: 0;
  width: 20px;
  height: 20px;

  & svg {
    stroke: var(--secondary-color-blue);
    fill: transparent;
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-bottom: 1px solid var(--secondary-color-blue);
  }
`;

export const ButtonDelete = styled.button`
  background-color: transparent;
  padding: 0;
  width: 20px;
  height: 20px;

  & svg {
    stroke: var(--btn-color-red);
    fill: transparent;
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-bottom: 1px solid var(--btn-color-red);
  }
`;

export const AddWaterBtn = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  color: var(--primery-color-blue);
  border: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  stroke: var(--primery-color-blue);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }

  & svg {
    width: 24px;
    height: 24px;
    fill: transparent;
  }

  &:hover {
    color: var(--secondary-yellow);
    stroke: var(--secondary-yellow);
  }
`;

export const LoaderWrapper = styled.div`
  height: 212px;
  position: relative;
`;
