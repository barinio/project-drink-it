import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodayWater } from 'redux/waterDetails/waterSelectors';
import { DeleteWaterModal } from '../DeleteWaterModal/DeleteWaterModal';
import { TodayListModal } from '../TodayListModal/TodayListModal';
import icons from '../../img/icons.svg';
import { getTodayWater } from 'redux/waterDetails/waterThunk';
import {
  AddWaterBtn,
  ButtonChange,
  ButtonDelete,
  IconGlass,
  TodayInfo,
  TodayItem,
  TodayList,
  TodayTime,
  TodayTitle,
  TodayTools,
  TodayVolume,
  TodayWrapper,
} from './TodayWaterList.styled';
import { formatTime } from 'redux/waterDetails/helpers';

const iconsList = {
  edit: `${icons}#icon-edit`,
  delete: `${icons}#icon-delete`,
  glass: `${icons}#icon-glass`,
  add: `${icons}#icon-add`,
};

export const TodayWaterList = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWaterItem, setSelectedWaterItem] = useState(null);
  const [isDeleteWaterModalOpen, setDeleteWaterModalOpen] = useState(false);
  const { dailyWaterList } = useSelector(selectTodayWater);

  useEffect(() => {
    dispatch(getTodayWater());
  }, [dispatch]);

  const openModalToAdd = () => {
    setSelectedWaterItem(null);
    setIsModalOpen(true);
  };

  const openModalToDelete = item => {
    setSelectedWaterItem(item);
    setDeleteWaterModalOpen(true);
  };

  const openModalToEdit = item => {
    setSelectedWaterItem(item);
    setIsModalOpen(true);
  };

  return (
    <TodayWrapper>
      <TodayTitle>Today</TodayTitle>
      <TodayList>
        {dailyWaterList?.map(item => (
          <TodayItem key={item._id}>
            <TodayInfo>
              <IconGlass>
                <use href={iconsList.glass}></use>
              </IconGlass>
              <TodayVolume>{item.waterVolume} ml</TodayVolume>
              <TodayTime>{formatTime(item.date)}</TodayTime>
            </TodayInfo>
            <TodayTools>
              <ButtonChange onClick={() => openModalToEdit(item)}>
                <svg>
                  <use href={iconsList.edit}></use>
                </svg>
              </ButtonChange>
              <ButtonDelete onClick={() => openModalToDelete(item)}>
                <svg>
                  <use href={iconsList.delete}></use>
                </svg>
              </ButtonDelete>
            </TodayTools>
          </TodayItem>
        ))}
      </TodayList>
      <AddWaterBtn onClick={openModalToAdd}>
        <svg>
          <use href={iconsList.add}></use>
        </svg>
        Add Water
      </AddWaterBtn>
      {isDeleteWaterModalOpen && (
        <DeleteWaterModal
          onClose={() => setDeleteWaterModalOpen(false)}
          recordId={selectedWaterItem?._id}
        />
      )}
      {isModalOpen && (
        <TodayListModal
          initialAmount={selectedWaterItem?.waterVolume}
          initialTime={selectedWaterItem?.date}
          isEditing={selectedWaterItem !== null}
          existingRecordId={selectedWaterItem?._id}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </TodayWrapper>
  );
};
