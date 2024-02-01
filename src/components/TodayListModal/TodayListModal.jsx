import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { formatTime } from 'redux/waterDetails/helpers';
import {
  Overlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  CloseIcon,
  BoxAddModal,
  PreviousInfo,
  AddParagraph,
  AddWater,
  Water,
  Label,
  ButtonMl,
  Icon,
  AddTime,
  InputTime,
  Input,
  FooterModal,
  AddButtonSave,
} from './TodayListModal.styled';
import { IconGlass, TodayTime, TodayVolume } from '../TodayWaterList/TodayWaterList.styled';
import icons from '../../img/icons.svg';
import { addWatersThunk, editWaterThunk } from 'redux/waterDetails/waterThunk';

export const TodayListModal = ({
  onClose,
  isEditing,
  initialAmount,
  initialTime,
  existingRecordId,
  ownerId,
}) => {
  const [amount, setAmount] = useState(initialAmount || 0);
  const [times, setTime] = useState(
    isEditing && initialTime ? format(new Date(initialTime), 'HH:mm') : format(new Date(), 'HH:mm')
  );
  const dispatch = useDispatch();

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

  // змінюємо кількість води за допомогою кнопок
  const increaseAmount = () => {
    setAmount(prevAmount => prevAmount + 50);
  };

  const decreaseAmount = () => setAmount(prevAmount => (prevAmount > 0 ? prevAmount - 50 : 0));

  const handleAmountChange = e => {
    let newValue = e.target.value;

    if (newValue.startsWith('0') && newValue.length > 1) {
      newValue = parseFloat(newValue.substring(1));
    }
    console.log(parseFloat(newValue));
    setAmount(parseFloat(newValue));
  };

  useEffect(() => {
    if (isEditing) {
      // console.log('here');
      // console.log(initialTime);
      setAmount(initialAmount || 0);
      setTime(formatTime(initialTime, 'HH:mm'));
    } else {
      setAmount(0);
      setTime(format(new Date(), 'HH:mm'));
    }
  }, [isEditing, initialAmount, initialTime]);

  const handleSubmit = () => {
    let isoDate;
    if (isEditing) {
      // Якщо редагуємо, використовуємо вже встановлений час з існуючого запису
      isoDate = initialTime
        ? new Date(initialTime).toISOString().slice(0, 16)
        : new Date().toISOString();
    } else if (times) {
      // Якщо створюємо новий запис і час вибрано користувачем
      const currentDate = new Date();
      const [hours, minutes] = times.split(':');
      // console.log('time: 1-й if', times);
      currentDate.setHours(hours, minutes);
      // console.log(currentDate);
      isoDate = currentDate.toISOString().slice(0, 16);
      // console.log('Наявна дата: 1-й if', isoDate);

      const currentDate2 = new Date(isoDate);

      // Нова дата на базі наявної
      const newDate = new Date(currentDate2);
      newDate.setHours(currentDate2.getHours() + 2);

      const formattedNewDate =
        newDate.getFullYear() +
        '-' +
        ('0' + (newDate.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + newDate.getDate()).slice(-2) +
        'T' +
        ('0' + newDate.getHours()).slice(-2) +
        ':' +
        ('0' + newDate.getMinutes()).slice(-2);
      // console.log('Наявна дата', isoDate);
      // console.log('Нова дата', formattedNewDate);
      isoDate = formattedNewDate;
    }

    const waterData = {
      waterVolume: amount,
      time: isoDate,
    };
    console.log(waterData);

    if (isEditing) {
      dispatch(editWaterThunk({ _id: ownerId, id: existingRecordId, ...waterData })).then(data => {
        if (!data.error) onClose();
      });
    } else {
      dispatch(addWatersThunk(waterData)).then(data => {
        if (!data.error) {
          onClose();
          setAmount(0);
        }
      });
    }
    onClose();
  };

  const handleOnClose = () => {
    if (isEditing) {
      onClose();
      return;
    }
    onClose();
    setAmount(0);
  };

  const title = isEditing ? 'Edit the entered amount of water' : 'Add water';

  const displayTime = isEditing && initialTime ? formatTime(initialTime) : '';

  return (
    <>
      <Overlay onClick={handleOnClose} />
      <ModalContent>
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>
            <CloseIcon>
              <use href={`${icons}#icon-outline`}></use>
            </CloseIcon>
          </CloseButton>
        </ModalHeader>
        <div>
          <BoxAddModal>
            {isEditing && (
              <PreviousInfo>
                <IconGlass>
                  <use href={`${icons}#icon-glass`}></use>
                </IconGlass>
                <TodayVolume>{initialAmount ? `${initialAmount} ml` : 'No notes yet'}</TodayVolume>
                <TodayTime>{initialTime ? `${displayTime}` : ''}</TodayTime>
              </PreviousInfo>
            )}
            <h3>{isEditing ? 'Correct entered data:' : 'Choose a value:'}</h3>
            <AddWater>
              <AddParagraph>Amount of water:</AddParagraph>
              <div>
                <ButtonMl onClick={decreaseAmount}>
                  <Icon>
                    <use href={`${icons}#icon-decrement-outline`}></use>
                  </Icon>
                </ButtonMl>
                <Label>
                  <Water>{Number.isNaN(amount) ? '0' : `${amount}`} ml</Water>
                </Label>
                <ButtonMl onClick={increaseAmount}>
                  <Icon>
                    <use href={`${icons}#icon-add`}></use>
                  </Icon>
                </ButtonMl>
              </div>
            </AddWater>
            <AddTime>
              <AddParagraph>Recording time:</AddParagraph>
              <InputTime
                type="time"
                value={times}
                onChange={e => setTime(e.target.value)}
                step="300"
              />
            </AddTime>
            <div>
              <h3>Enter the value of the water used:</h3>
              <Input
                type="number"
                value={Number.isNaN(amount) ? '0' : `${amount}`}
                onChange={handleAmountChange}
                onBlur={() => setAmount(prevAmount => prevAmount || initialAmount || 0)}
              />
            </div>
            <FooterModal>
              <span>{Number.isNaN(amount) ? `0` : `${amount}`}ml</span>
              <AddButtonSave onClick={handleSubmit}>Save</AddButtonSave>
            </FooterModal>
          </BoxAddModal>
        </div>
      </ModalContent>
    </>
  );
};
