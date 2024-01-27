import {
  Btn,
  Circle,
  Home,
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

const Welcome = () => {
  return (
    <>
      <Home>
        <LeftSide>
          <TitleLeft>Water consumption tracker</TitleLeft>
          <TextH3Left>Record daily water intake and track</TextH3Left>
          <TextP>Tracker Benefits</TextP>
          <ListLeft>
            <ItemLeft>
              <Svg>
                <use href={icons + '#icon-calendar-days'}></use>
              </Svg>
              Habit drive
            </ItemLeft>
            <ItemLeft>
              <Svg>
                <use href={icons + '#icon-chart-bar'}></use>
              </Svg>
              View statistics
            </ItemLeft>
            <ItemLeft>
              <Svg>
                <use href={icons + '#icon-wrench-screwdriver'}></use>
              </Svg>
              Personal rate setting
            </ItemLeft>
          </ListLeft>
          <Btn type="button">Try tracker</Btn>
        </LeftSide>
        <RightSide>
          <TitleRight>Why drink water</TitleRight>
          <ListRight>
            <ItemRight>
              <Circle></Circle> Supply of nutrients to all organs
            </ItemRight>
            <ItemRight>
              <Circle></Circle>Providing oxygen to the lungs
            </ItemRight>
            <ItemRight>
              <Circle></Circle>Maintaining the work of the heart
            </ItemRight>
            <ItemRight>
              <Circle></Circle>Release of processed substances
            </ItemRight>
            <ItemRight>
              <Circle></Circle>
              Ensuring the stability of the internal environment
            </ItemRight>
            <ItemRight>
              <Circle></Circle>Maintaining within the normal temperature
            </ItemRight>
            <ItemRight>
              <Circle></Circle>
              Maintaining an immune system capable of resisting disease
            </ItemRight>
          </ListRight>
        </RightSide>
      </Home>
    </>
  );
};

export default Welcome;
