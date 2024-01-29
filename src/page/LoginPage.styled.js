import styled from 'styled-components';
import mobileImg from '../img/background-img-mobile.png';
import tabletImg from '../img/background-img-tablet.png';
import desktopImg from '../img/background-img-desktop.png';

export const LoginSection = styled.section`
  @media screen and (max-width: 767px) {
    background-image: url(${mobileImg});
    background-repeat: no-repeat;
    background-position: center top 27px;
    height: 100vh;
  }
  @media screen and (min-width: 768px) {
    position: relative;
    height: 100vh;
    &::before {
      content: '';
      position: absolute;
      top: -107px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      background-image: url(${tabletImg});
      background-repeat: no-repeat;
      background-size: auto;
      z-index: -1;
    }
  }
  @media screen and (min-width: 1200px) {
    height: 100vh;
    &::before {
      top: -272px;
      background-image: url(${desktopImg});
      background-position: center;
    }
  }
`;

export const LoginContainer = styled.div`
  @media screen and (max-width: 767px) {
    max-width: 320px;
    padding: 0 20px;

    margin: 0 auto;
    height: 100vh;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 104px;

    display: flex;
    justify-content: flex-end;
    margin: 0 auto;
  }
`;
