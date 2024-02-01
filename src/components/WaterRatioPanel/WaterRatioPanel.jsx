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
import { selectWaterPercentage } from 'redux/waterDetails/waterSelectors';

export const WaterRatioPanel = () => {
  const waterPercent = useSelector(selectWaterPercentage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getBackgroundSize = () => {
    if (Number.isNaN(waterPercent)) {
      return { backgroundSize: `${0}` };
    }
    return {
      backgroundSize: `${waterPercent}%`,
    };
  };

  const getPosition = () => {
    const limit = Math.min(100, Math.max(0, waterPercent));
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

  const isShow = waterPercent > 0 && waterPercent <= 100;

  return (
    <WaterRatioPanelContainer>
      <WaterRangeContainer>
        <WaterRangeHeader>Today</WaterRangeHeader>
        <WaterRange
          type="range"
          value={Number.isNaN(waterPercent) ? `0` : waterPercent}
          readOnly={true}
          style={getBackgroundSize()}
          aria-label="Water range"
        />
        <RateContainer>
          <StartMark>0%</StartMark>
          {isShow && (
            <MiddleMark id="waterMark" style={getPosition()}>{`${waterPercent}%`}</MiddleMark>
          )}
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
