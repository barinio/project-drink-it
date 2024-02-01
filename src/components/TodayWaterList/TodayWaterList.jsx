import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectOwnerId,
  selectTodayWater,
} from 'redux/waterDetails/waterSelectors';
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
  Forget,
} from './TodayWaterList.styled';
import { formatTime } from 'redux/waterDetails/helpers';
import Loader from 'components/Loader/Loader';

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
  const isLoading = useSelector(selectIsLoading);
  const ownerId = useSelector(selectOwnerId);

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
      {isLoading ? (
        <Loader />
      ) : (
        <TodayList>
          {dailyWaterList?.length < 0 ||
          dailyWaterList === undefined ||
          Number.isNaN(dailyWaterList) ? (
            <Forget>You haven't drunk water yet. Don't forget to meet your daily norma! </Forget>
          ) : (
            dailyWaterList?.map(item => (
              <TodayItem key={item.id}>
                <TodayInfo>
                  <IconGlass>
                    <use href={iconsList.glass}></use>
                  </IconGlass>
                  <TodayVolume>{item.waterVolume} ml</TodayVolume>
                  <TodayTime>{formatTime(item.time)}</TodayTime>
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
            ))
          )}
        </TodayList>
      )}
      <AddWaterBtn onClick={openModalToAdd}>
        <svg>
          <use href={iconsList.add}></use>
        </svg>
        Add Water
      </AddWaterBtn>
      {isDeleteWaterModalOpen && (
        <DeleteWaterModal
          onClose={() => setDeleteWaterModalOpen(false)}
          recordId={selectedWaterItem?.id}
        />
      )}
      {isModalOpen && (
        <TodayListModal
          initialAmount={selectedWaterItem?.waterVolume}
          initialTime={selectedWaterItem?.time}
          isEditing={selectedWaterItem !== null}
          existingRecordId={selectedWaterItem?.id}
          onClose={() => setIsModalOpen(false)}
          ownerId={ownerId}
        />
      )}
    </TodayWrapper>
  );
};
