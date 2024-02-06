import React, { useState, useEffect } from 'react';
import Modal from './dailyNormaModal';
import { getDailyNorma } from '../../redux/dailyNorma/dailyNormaThunk';
import { useDispatch, useSelector } from 'react-redux';
import {
  DailyNormaBox,
  DailyText,
  RequiredWaterHeader,
  BottomBox,
  EditWaterButton,
} from './dailyNorma.styled';
import { selectAuthUserData } from 'redux/auth/auth.selectors';
import {
  selectDailyNormaActivity,
  selectDailyNormaData,
  selectDailyNormaGender,
  selectDailyNormaWeight,
  selectDailyNormaWillDrink,
} from 'redux/dailyNorma/dailyNorma.selectors';
import { useTranslation } from 'react-i18next';

export const DailyNorma = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dailyNorma, setDailyNorma] = useState(0);

  const userId = useSelector(selectAuthUserData);
  const genderData = useSelector(selectDailyNormaGender);
  const weightData = useSelector(selectDailyNormaWeight);
  const activityTimeData = useSelector(selectDailyNormaActivity);
  const dailyNormaData = useSelector(selectDailyNormaData);
  const willDrinkData = useSelector(selectDailyNormaWillDrink);

  useEffect(() => {
    dispatch(getDailyNorma(userId._id));
    const fetchedDailyNorma = dailyNormaData;
    const formattedAmount = parseFloat(fetchedDailyNorma / 1000).toFixed(1);
    setDailyNorma(formattedAmount);
  }, [dispatch, userId._id, dailyNormaData]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <DailyNormaBox className="dark-daily-norma-box">
      <DailyText className="dark-daily-norma-text">{t('dailyNorma')}</DailyText>
      <BottomBox>
        <RequiredWaterHeader>
          {dailyNorma} {t('l')}
        </RequiredWaterHeader>
        <EditWaterButton onClick={handleModalOpen}>{t('edit')}</EditWaterButton>
      </BottomBox>

      {isModalOpen && (
        <Modal
          onClose={handleModalClose}
          genderData={genderData}
          weightData={weightData}
          activityTimeData={activityTimeData}
          dailyNormaData={dailyNormaData}
          willDrinkData={willDrinkData / 1000}
          userId={userId._id}
        />
      )}
    </DailyNormaBox>
  );
};
