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

const Welcome = () => {
  return (
    <>
      <HomeWrapper>
        <Home>
          <LeftSide>
            <TitleLeft>Water consumption tracker</TitleLeft>
            <TextH3Left>Record daily water intake and track</TextH3Left>
            <TextP className='dark-welcome-page-text'>Tracker Benefits</TextP>
            <ListLeft>
              <ItemLeft className='dark-welcome-page-label'>
                <Svg>
                  <use href={icons + '#icon-calendar-days'}></use>
                </Svg>
                Habit drive
              </ItemLeft>
              <ItemLeft className='dark-welcome-page-label'>
                <Svg>
                  <use href={icons + '#icon-chart-bar'}></use>
                </Svg>
                View statistics
              </ItemLeft>
              <ItemLeft className='dark-welcome-page-label'>
                <Svg>
                  <use href={icons + '#icon-wrench-screwdriver'}></use>
                </Svg>
                Personal rate setting
              </ItemLeft>
            </ListLeft>
            <NavLink to="/signup">
              <Btn type="button">Try tracker</Btn>
            </NavLink>
          </LeftSide>
          <RightSide>
            <TitleRight className='dark-title-right'>Why drink water</TitleRight>
            <ListRight>
              <ItemRight>Supply of nutrients to all organs</ItemRight>
              <ItemRight>Providing oxygen to the lungs</ItemRight>
              <ItemRight>Maintaining the work of the heart</ItemRight>
              <ItemRight>Release of processed substances</ItemRight>
              <ItemRight>
                Ensuring the stability of the internal environment
              </ItemRight>
              <ItemRight>Maintaining within the normal temperature</ItemRight>
              <ItemRight>
                Maintaining an immune system capable of resisting disease
              </ItemRight>
            </ListRight>
          </RightSide>
        </Home>
      </HomeWrapper>
    </>
  );
};

export default Welcome;
