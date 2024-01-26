import {
  Icon,
  AddWaterButton,
  StartMark,
  MiddleMark,
  RateContainer,
  EndMark,
  WaterRange,
  WaterRangeContainer,
  WaterRangeHeader,
  WaterRatioPanelContainer,
} from './WaterRatioPanel.styled';

import { TodayListModal } from '../TodayListModal/TodayListModal';

import { useSelector } from 'react-redux';
import { useState } from 'react';

import icons from '../../img/icons.svg';
import { selectWaterRate } from 'redux/waterDetails/waterSelectors';

export const WaterRatioPanel = () => {
  const waterRate = useSelector(selectWaterRate);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${waterRate}%`,
    };
  };

  const getPosition = () => {
    const limit = Math.min(100, Math.max(0, waterRate));
    return {
      left: `calc(${limit}% - 2px)`,
    };
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <WaterRatioPanelContainer>
      <WaterRangeContainer>
        <WaterRangeHeader>Today</WaterRangeHeader>
        <WaterRange
          type="range"
          value={waterRate}
          readOnly={true}
          style={getBackgroundSize()}
          aria-label="Water range"
        />
        <RateContainer>
          <StartMark>0%</StartMark>
          <MiddleMark
            id="waterMark"
            style={getPosition()}
          >{`${waterRate}%`}</MiddleMark>
          <EndMark>100%</EndMark>
        </RateContainer>
      </WaterRangeContainer>
      <AddWaterButton
        onClick={() => {
          openModal();
        }}
      >
        <Icon>
          <use href={`${icons}#icon-add-button`}></use>
        </Icon>
        Add Water
      </AddWaterButton>
      {isModalOpen && (
        <TodayListModal
          onClose={() => {
            closeModal();
          }}
          onShow={isModalOpen}
        />
      )}
    </WaterRatioPanelContainer>
  );
};
