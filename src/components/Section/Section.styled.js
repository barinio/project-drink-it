import styled from 'styled-components';
import mobileImg from '../../img/home-background-mobile.svg';
import tabletImg from '../../img/home-background-tablet.svg';
import desktopImg from '../../img/home-background-desktop.svg';
import bottle from '../../img/bottle.svg';
export const SectionWrapper = styled.section`
  @media screen and (max-width: 767px) {
    position: fixed;
    height: 100%;

    width: 100%;
    background-image: url(${mobileImg});
    background-position: center;

    background-size: cover;
    background-repeat: no-repeat;
    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      background-image: url(${bottle});
      top: 50%;
      left: 50%;
      transform: translate(-50%, -10%);
      width: 218px;
      height: 190px;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url(${tabletImg});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -10;
    &::before {
      z-index: -1;
      content: '';
      width: 570px;
      height: 500px;
      position: absolute;
      background-image: url(${bottle});
      top: 50%;
      left: 50%;
      transform: translate(-32%, -70%);
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  @media screen and (min-width: 1200px) {
    max-height: 100%;
    background-image: url(${desktopImg});
    background-position: top;
    background-size: contain;
    z-index: -21;
    &::before {
      z-index: -1;
      width: 710px;
      height: 620px;
      position: absolute;
      background-image: url(${bottle});
      top: 50%;
      left: 45%;
      transform: translate(-85%, -60%);
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  @media screen and (min-width: 1440px) {
    max-height: 100%;
    &::before {
      z-index: -1;
      width: 710px;
      height: 620px;
      position: absolute;
      background-image: url(${bottle});
      top: 50%;
      left: 45%;
      transform: translate(-85%, -60%);
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
`;
