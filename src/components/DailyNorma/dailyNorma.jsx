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

export const DailyNorma = () => {
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
    // console.log(fetchedDailyNorma);
    const formattedAmount = parseFloat(fetchedDailyNorma / 1000).toFixed(1);
    // console.log(formattedAmount);
    setDailyNorma(formattedAmount);
  }, [dispatch, userId._id, dailyNormaData]);

  // export const DailyNorma = () => {
  //   const dispatch = useDispatch();
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [dailyNorma, setDailyNorma] = useState(0);
  //   const [loading, setLoading] = useState(true);
  //   const userId = useSelector(selectAuthUserData);
  //   const genderData = useSelector(selectDailyNormaGender);
  //   const weightData = useSelector(selectDailyNormaWeight);
  //   const activityTimeData = useSelector(selectDailyNormaActivity);
  //   const dailyNormaData = useSelector(selectDailyNormaData);
  //   const willDrinkData = useSelector(selectDailyNormaWillDrink);

  //   useEffect(() => {
  //     dispatch(getDailyNorma(userId._id))
  //       .then(() => setLoading(false))
  //       .catch(() => setLoading(false));
  //   }, [dispatch, userId._id]);

  //   useEffect(() => {
  //     if (!loading && !isNaN(dailyNormaData)) {
  //       console.log(dailyNormaData);
  //       const formattedAmount = parseFloat(dailyNormaData / 1000).toFixed(1);
  //       console.log(formattedAmount);
  //       setDailyNorma(formattedAmount);
  //     }
  //   }, [dailyNormaData, loading]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <DailyNormaBox className="dark-daily-norma-box">
      <DailyText className="dark-daily-norma-text">My daily norma</DailyText>
      <BottomBox>
        <RequiredWaterHeader>{dailyNorma} L</RequiredWaterHeader>
        <EditWaterButton onClick={handleModalOpen}>Edit</EditWaterButton>
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
