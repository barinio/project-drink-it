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

// import React, { useState, useEffect } from 'react';
// import Modal from './dailyNormaModal';
// import { useSelector } from 'react-redux';
// import { selectAuthUserData } from 'redux/auth/auth.selectors';
// import {
//   DailyNormaBox,
//   DailyText,
//   RequiredWaterHeader,
//   BottomBox,
//   EditWaterButton,
// } from './dailyNorma.styled';

// export const DailyNorma = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [dailyNorma, setDailyNorma] = useState(0);
//   const [userData, setUserData] = useState(null);

//   const UserData = useSelector(selectAuthUserData);

//   useEffect(() => {
//     if (UserData) {
//       const formattedAmount = parseFloat(UserData.dailyNorma / 1000).toFixed(1);
//       setDailyNorma(formattedAmount);
//       setUserData(UserData);
//     }
//   }, [UserData]);

//   useEffect(() => {
//     setUserData(UserData);
//   }, [UserData]);

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };


//   return (
//     <DailyNormaBox className="dark-daily-norma-box">
//       <DailyText className="dark-daily-norma-text">My daily norma</DailyText>
//       <BottomBox>
//         <RequiredWaterHeader>{dailyNorma} L</RequiredWaterHeader>
//         <EditWaterButton onClick={handleModalOpen}>Edit</EditWaterButton>
//       </BottomBox>

//       {isModalOpen && (
//         <Modal
//           onClose={handleModalClose}
//           dailyNormaData={UserData.dailyNorma}
//           genderData={UserData.gender}
//           weightData={UserData.weight}
//           activityTimeData={UserData.activityTime}
//           willDrinkData={UserData.willDrink / 1000}
//           // userData={userData}
//           // setUserData={setUserData}
//         />
//       )}
//     </DailyNormaBox>
//   );
// };


