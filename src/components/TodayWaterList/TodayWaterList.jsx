import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoadingList,
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
  LoaderWrapper,
  WrapNoList,
} from './TodayWaterList.styled';
import { formatTime } from 'redux/waterDetails/helpers';
import Loader from 'components/Loader/Loader';
import { useTranslation } from 'react-i18next';

const iconsList = {
  edit: `${icons}#icon-edit`,
  delete: `${icons}#icon-delete`,
  glass: `${icons}#icon-glass`,
  add: `${icons}#icon-add`,
};

export const TodayWaterList = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWaterItem, setSelectedWaterItem] = useState(null);
  const [isDeleteWaterModalOpen, setDeleteWaterModalOpen] = useState(false);
  const { waterlist } = useSelector(selectTodayWater);
  const isLoadingList = useSelector(selectIsLoadingList);
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
      <TodayTitle>{t('today')}</TodayTitle>
      {isLoadingList ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <TodayList>
          {waterlist?.length === 0 || waterlist === undefined ? (

            <Forget>{t('haveNotDrunkYet')}</Forget>

            <WrapNoList>
              <Forget>
                Oops&#128561;... Looks like you didn't drink ANY water today!<br></br> It hurts
                &#129319;
                <br></br> BUT if you drank, quickly add it before you forget <br></br>&#128540;
                &#129325; &#128527;
              </Forget>
            </WrapNoList>
          ) : (
            waterlist?.map(item => (
              <TodayItem key={item.id}>
                <TodayInfo>
                  <IconGlass>
                    <use href={iconsList.glass}></use>
                  </IconGlass>
                  <TodayVolume>
                    {item.waterVolume} {t('ml')}
                  </TodayVolume>
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
        {t('addWater')}
      </AddWaterBtn>
      {isDeleteWaterModalOpen && (
        <DeleteWaterModal
          onClose={() => setDeleteWaterModalOpen(false)}
          recordId={selectedWaterItem?.id}
          ownerId={ownerId}
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
