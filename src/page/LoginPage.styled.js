import styled from 'styled-components';
import mobileImg from '../img/background-img-mobile.png';
import tabletImg from '../img/background-img-tablet.png';
import desktopImg from '../img/background-img-desktop.png';

export const LoginSection = styled.section`
  @media screen and (min-width: 320px) {
    max-width: 320px;
    padding: 0 20px;
    margin-top: 24px;
    background-image: url(${mobileImg});
    background-repeat: no-repeat;

    height: 100vh;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    margin-top: 40px;
    background-image: url(${tabletImg});
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 112px;
    background-image: url(${desktopImg});

    margin-top: 140px;
  }
`;
