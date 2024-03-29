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
import {
  IconGlass,
  TodayTime,
  TodayVolume,
} from '../TodayWaterList/TodayWaterList.styled';
import icons from '../../img/icons.svg';
import { addWatersThunk, editWaterThunk } from 'redux/waterDetails/waterThunk';
import { useTranslation } from 'react-i18next';

export const TodayListModal = ({
  onClose,
  isEditing,
  initialAmount,
  initialTime,
  existingRecordId,
  ownerId,
}) => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(initialAmount || 0);
  const [times, setTime] = useState(
    isEditing && initialTime
      ? format(new Date(initialTime), 'HH:mm')
      : format(new Date(), 'HH:mm')
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
  const increaseAmount = () => {
    setAmount(prevAmount => prevAmount + 50);
  };

  const decreaseAmount = () =>
    setAmount(prevAmount => (prevAmount > 0 ? prevAmount - 50 : 0));

  const handleAmountChange = e => {
    let newValue = e.target.value;

    if (newValue.startsWith('0') && newValue.length > 1) {
      newValue = parseFloat(newValue.substring(1));
    }
    setAmount(parseFloat(newValue));
  };

  useEffect(() => {
    if (isEditing) {
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
      isoDate = initialTime
        ? new Date(initialTime).toISOString().slice(0, 16)
        : new Date().toISOString();
    } else if (times) {
      const currentDate = new Date();
      const [hours, minutes] = times.split(':');
      currentDate.setHours(hours, minutes);
      isoDate = currentDate.toISOString().slice(0, 16);

      const currentDate2 = new Date(isoDate);

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
      isoDate = formattedNewDate;
    }

    const waterData = {
      waterVolume: amount,
      time: isoDate,
    };

    if (isEditing) {
      dispatch(
        editWaterThunk({ _id: ownerId, id: existingRecordId, ...waterData })
      ).then(data => {
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

  const title = isEditing ? t('editWater') : t('addWater');

  const displayTime = isEditing && initialTime ? formatTime(initialTime) : '';

  return (
    <>
      <Overlay onClick={handleOnClose} />
      <ModalContent className="dark-water-modal">
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
                <TodayVolume>
                  {initialAmount ? `${initialAmount} ${t('ml')}` : t('noNotesYet')}
                </TodayVolume>
                <TodayTime>{initialTime ? `${displayTime}` : ''}</TodayTime>
              </PreviousInfo>
            )}
            <h3>{isEditing ? `${t('correctData')}` : `${t('chooseValue')}`}</h3>
            <AddWater>
              <AddParagraph className="dark-modal-text">
                {t('amountWater')}
              </AddParagraph>
              <div>
                <ButtonMl onClick={decreaseAmount}>
                  <Icon>
                    <use href={`${icons}#icon-decrement-outline`}></use>
                  </Icon>
                </ButtonMl>
                <Label className="dark-water-modal-button">
                  <Water>
                    {Number.isNaN(amount) ? '0' : `${amount}`} {t('ml')}
                  </Water>
                </Label>
                <ButtonMl onClick={increaseAmount}>
                  <Icon>
                    <use href={`${icons}#icon-add`}></use>
                  </Icon>
                </ButtonMl>
              </div>
            </AddWater>
            <AddTime>
              <AddParagraph className="dark-modal-text">
                {t('recordingTime')}
              </AddParagraph>
              <InputTime
                type="time"
                value={times}
                onChange={e => setTime(e.target.value)}
                step="300"
              />
            </AddTime>
            <div>
              <h3>{t('waterUsed')}</h3>
              <Input
                type="number"
                value={Number.isNaN(amount) ? '0' : `${amount}`}
                onChange={handleAmountChange}
                onBlur={() =>
                  setAmount(prevAmount => prevAmount || initialAmount || 0)
                }
              />
            </div>
            <FooterModal>
              <span>
                {Number.isNaN(amount) ? `0 ` : `${amount} `}
                {t('ml')}
              </span>
              <AddButtonSave onClick={handleSubmit}>{t('save')}</AddButtonSave>
            </FooterModal>
          </BoxAddModal>
        </div>
      </ModalContent>
    </>
  );
};
