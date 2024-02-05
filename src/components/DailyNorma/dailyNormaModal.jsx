import React, { useState, useEffect, useRef, useCallback } from 'react';
import { updateDailyNorma } from '../../redux/dailyNorma/dailyNormaThunk';
import { useDispatch} from 'react-redux';
// import { toast } from 'react-toastify';
import '../../index.css';
// import { selectAuthUserData } from 'redux/auth/auth.selectors';

import {
    ModalOverlay,
    Modal,
    TopDiv,
    CloseButton,
    ModalHeader,
    FormulasBox,
    FormulaBox,
    ColoredFormula,
    CaptionBox,
    CaptionText,
    CaptionMark,
    FormBigText,
    RadioButton,
    RequiredText,
    InputText,
    WaterFormInput,
    RequiredWaterBox,
    RequiredWater,
    SaveButton,
    LabelText,
  } from './dailyNorma.styled';

  const DailyNormaModal = ({
    onClose,
    genderData,
    weightData,
    activityTimeData,
    dailyNormaData,
    willDrinkData,
    userId,
  }) => {
    const dispatch = useDispatch();
  
    const [gender, setGender] = useState(genderData);
    const [weight, setWeight] = useState(weightData);
    const [activityTime, setActivityTime] = useState(activityTimeData);
    const [dailyNorma, setDailyNorma] = useState(dailyNormaData);
    const [willDrink, setWillDrink] = useState(willDrinkData);
  
    const weightInputRef = useRef(null);
    const activityTimeInputRef = useRef(null);
    const willDrinkInputRef = useRef(null);

    const handleGenderChange = (selectedGender) => {
      setGender(selectedGender);
      calculateDailyNorma();
    };
  
    const handleWeightChange = (e) => {
      let numericValue = e.target.value.replace(/[^0-9.,]/g, '');
      if (numericValue >= 250){
        numericValue = 250;
      }
      setWeight(numericValue);
    };
  
    const handleActivityTimeChange = (e) => {
      let numericValue = e.target.value.replace(/[^0-9.,]/g, '');
      if (numericValue >= 16){
        numericValue = 16;
      }
      setActivityTime(numericValue);
    };
  
    const handleWillDrinkChange = (e) => {
      let numericValue = e.target.value.replace(/[^0-9.,]/g, '');
      if (numericValue >= 15){
        numericValue = 15;
      }
      setWillDrink(numericValue);
    };
  
    const handleWeightFocus = () => {
      if (parseFloat(weight) === 0) {
        weightInputRef.current.value = '';
      }
    };
  
    const handleActivityTimeFocus = () => {
      if (parseFloat(activityTime) === 0) {
        activityTimeInputRef.current.value = '';
      }
    };
  
    const handleWillDrinkFocus = () => {
      if (parseFloat(willDrink) === 0) {
        willDrinkInputRef.current.value = '';
      }
    };
  
    const handleWeightBlur = () => {
      if (weight === '' || parseFloat(weight) === 0) {
        weightInputRef.current.value = 0;
        setWeight(0);
      }
      calculateDailyNorma();
    };
  
    const handleActivityTimeBlur = () => {
      if (activityTime === '' || parseFloat(activityTime) === 0) {
        activityTimeInputRef.current.value = 0;
        setActivityTime(0);
      }
      calculateDailyNorma();
    };
  
    const handleWillDrinkBlur = () => {
      if (willDrink === '' || parseFloat(willDrink) === 0) {
        willDrinkInputRef.current.value = 0;
        setWillDrink(0);
      }
      calculateDailyNorma();
    };

    const calculateDailyNorma = useCallback(() => {
      const userWeight = parseFloat(weight);
      const userActivity = parseFloat(activityTime);
  
      if (isNaN(userWeight) || isNaN(userActivity)) {
        setDailyNorma((2.0).toFixed(1));
        return;
      }
  
      const genderWeight = gender === 'woman' ? 0.03 : 0.04;
      const genderActivity = gender === 'woman' ? 0.4 : 0.6;
      let formulaResult = userWeight * genderWeight + userActivity * genderActivity;
  
      formulaResult = formulaResult === 0 ? 2.0 : formulaResult;
  
      setDailyNorma(formulaResult > 15 ? 15 : formulaResult.toFixed(1));
    }, [gender, weight, activityTime]);
  
    useEffect(() => {
      calculateDailyNorma();
    }, [calculateDailyNorma]);
  
    useEffect(() => {
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          onClose();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget && e.button === 0) {
      onClose();
    }
  };

  const handleSave = async () => {
    const requestData = {
      // id: userId,
      gender: gender,
      weight: parseFloat(weight),
      activityTime: parseFloat(activityTime),
      willDrink: parseFloat(willDrink * 1000),
      dailyNorma: parseFloat(dailyNorma * 1000),
    };
    dispatch(updateDailyNorma(requestData));
    onClose();
  };

return (
    <ModalOverlay onMouseDown={handleBackdropClick}>
      <Modal className='dark-daily-norma-modal'>
        <TopDiv>
          <ModalHeader className='dark-daily-norma-text'>My daily norma</ModalHeader>
          <CloseButton onClick={onClose}>&#10005;</CloseButton>
        </TopDiv>

        <FormulasBox>
          <FormulaBox>
            <LabelText className='dark-daily-norma-text'>Female:</LabelText>
            <ColoredFormula>V=(M*0.03) + (T*0.4)</ColoredFormula>
          </FormulaBox>
          <FormulaBox>
            <LabelText className='dark-daily-norma-text'>Male:</LabelText>
            <ColoredFormula>V=(M*0.04) + (T*0.6)</ColoredFormula>
          </FormulaBox>
        </FormulasBox>

        <CaptionBox>
          <CaptionText>
            <CaptionMark>*</CaptionMark> V is the volume of the water norm in liters per day, M is your body weight, T is the time
            of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
          </CaptionText>
        </CaptionBox>

        <form>
          <FormBigText className='dark-daily-norma-text'>Calculate your rate:</FormBigText>

          <RadioButton>
            <input
              type="radio"
              id="woman"
              name="gender"
              value="woman"
              checked={gender === 'woman'}
              onChange={() => handleGenderChange('woman')}
            />
            <label htmlFor="woman">
              <LabelText className='dark-daily-norma-text'>Female</LabelText>
            </label>

            <input
              type="radio"
              id="man"
              name="gender"
              value="man"
              checked={gender === 'man'}
              onChange={() => handleGenderChange('man')}
            />
            <label htmlFor="man">
              <LabelText className='dark-daily-norma-text'>Male</LabelText>
            </label>
          </RadioButton>

          <label>
            <InputText className='dark-daily-norma-text'>Your weight in kilograms:</InputText>
          </label>
            <WaterFormInput
              type="text"
              value={weight}
              onChange={handleWeightChange}
              onFocus={handleWeightFocus}
              onBlur={handleWeightBlur}
              ref={weightInputRef}
              defaultValue={weight === 0 ? '' : weight}
              maxLength={4}

              onKeyDown={(e) =>["e", "E", "+", "-", "="].includes(e.key) && e.preventDefault()}
            />

          <label>
            <InputText className='dark-daily-norma-text'>The time of active participation in sports or other activities with a high physical load in hours:</InputText>
          </label>
            <WaterFormInput
              type="text"
              value={activityTime}
              onChange={handleActivityTimeChange}
              onFocus={handleActivityTimeFocus}
              onBlur={handleActivityTimeBlur}
              ref={activityTimeInputRef}
              defaultValue={activityTime === 0 ? '' : activityTime}
              maxLength={3}

              onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
            />

          <RequiredWaterBox>
            <RequiredText className='dark-daily-norma-text'>The required amount of water in liters per day:</RequiredText>
            <RequiredWater>{dailyNorma} L</RequiredWater>
          </RequiredWaterBox>

          <FormBigText className='dark-daily-norma-text'>Write down how much water you will drink:</FormBigText>
          <WaterFormInput
            type="text"
            value={willDrink}
            onChange={handleWillDrinkChange}
            onFocus={handleWillDrinkFocus}
            onBlur={handleWillDrinkBlur}
            ref={willDrinkInputRef}
            defaultValue={willDrink === 0 ? '' : willDrink}
            
            maxLength={3}
            
            onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
          />
          

          <SaveButton type="button" onClick={handleSave}>Save</SaveButton>
        </form>
      </Modal>
    </ModalOverlay>
  );
};

export default DailyNormaModal;