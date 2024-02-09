import {
  Btn,
  Home,
  HomeWrapper,
  ItemLeft,
  ItemRight,
  LeftSide,
  ListLeft,
  ListRight,
  RightSide,
  Svg,
  TextH3Left,
  TextP,
  TitleLeft,
  TitleRight,
} from './WelcomePage.styled';
import icons from '../img/icons.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WakeUpServer from 'services/WakeUpServer';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <>
      <HomeWrapper>
        <Home>
          <LeftSide>
            <TitleLeft className="dark-title-left">
              {t('textLeft.title')}
            </TitleLeft>
            <TextH3Left>{t('textLeft.text1')}</TextH3Left>
            <TextP className="dark-welcome-page-text">
              {t('textLeft.text2')}
            </TextP>
            <ListLeft>
              <ItemLeft className="dark-welcome-page-label">
                <Svg>
                  <use href={icons + '#icon-calendar-days'}></use>
                </Svg>
                {t('textLeft.text3')}
              </ItemLeft>
              <ItemLeft className="dark-welcome-page-label">
                <Svg>
                  <use href={icons + '#icon-chart-bar'}></use>
                </Svg>
                {t('textLeft.text4')}
              </ItemLeft>
              <ItemLeft className="dark-welcome-page-label">
                <Svg>
                  <use href={icons + '#icon-wrench-screwdriver'}></use>
                </Svg>
                {t('textLeft.text5')}
              </ItemLeft>
            </ListLeft>
            <NavLink to="/signup">
              <Btn type="button">{t('buttons.welcomepage')}</Btn>
            </NavLink>
          </LeftSide>
          <RightSide>
            <TitleRight className="dark-title-right">
              {t('textRight.listTitle')}
            </TitleRight>
            <ListRight>
              <ItemRight>{t('textRight.listItem1')}</ItemRight>
              <ItemRight>{t('textRight.listItem2')}</ItemRight>
              <ItemRight>{t('textRight.listItem3')}</ItemRight>
              <ItemRight>{t('textRight.listItem4')}</ItemRight>
              <ItemRight>{t('textRight.listItem5')}</ItemRight>
              <ItemRight>{t('textRight.listItem6')}</ItemRight>
              <ItemRight>{t('textRight.listItem7')}</ItemRight>
            </ListRight>
          </RightSide>
        </Home>
      </HomeWrapper>
      <WakeUpServer />
    </>
  );
};

export default Welcome;
