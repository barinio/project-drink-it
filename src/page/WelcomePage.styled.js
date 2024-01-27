import styled from 'styled-components';
import imgMobile from '../img/bg_main_mobile.svg';
import imgTablet from '../img/bg_main_tablet.svg';
import imgDesktop from '../img/bg_main_desktop_group.svg';

export const LeftSide = styled.div`
  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;

    width: 280px;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 439px;
  }
`;

export const TitleLeft = styled.h2`
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.17;
  }
`;

export const TextH3Left = styled.h3`
  margin-bottom: 24px;

  font-weight: 400;
  font-size: 24px;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const TextP = styled.p`
  margin-bottom: 12px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
`;

export const ListLeft = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const ItemLeft = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    width: 224px;
  }
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100%;
  height: 36px;
  padding: 8px 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  color: var(--primery-color-white);
  background-color: var(--primery-color-blue);

  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(64, 123, 255, 0.4);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 768px) {
    min-width: 336px;
    height: 44px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
    margin-bottom: 0;
  }
`;

export const RightSide = styled.div`
  display: block;
  padding: 24px 16px;

  max-width: 248px;
  margin-left: auto;
  margin-right: auto;

  background-color: #ecf2ff;

  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    max-width: 446px;
    margin: 0;
    border: none;
  }

  @media screen and (min-width: 1440px) {
    max-width: 494px;
  }
`;

export const TitleRight = styled.h3`
  margin-bottom: 12px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
`;

export const ListRight = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ItemRight = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
`;

export const Home = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  background-image: url(${imgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  @media screen and (min-width: 320px) {
    /* background-image: url(${imgMobile}); */
  }
  @media screen and (min-width: 768px) {
    padding-top: 40px;

    background-image: url(${imgTablet});
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 81px;
    justify-content: center;
    align-items: end;

    min-width: 1440px;

    padding-top: 31px;
    padding-bottom: 294px;

    background-image: url(${imgDesktop});
  }
`;

export const Circle = styled.div`
  display: block;
  width: 8px;
  height: 8px;

  border-radius: 50%;
  background-color: var(--primery-color-blue);
`;

export const Svg = styled.svg`
  width: 32px;
  height: 32px;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
