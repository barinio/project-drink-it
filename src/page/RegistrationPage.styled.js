import styled from 'styled-components';
import mobBackground from '../img/background-img-mobile.png';
import tabBackground from '../img/background-img-tablet.png';
import descBackground from '../img/background-img-desktop.png';
export const SignupPage = styled.section`
  @media screen and (min-width: 320px) {
    max-width: 280px;
    padding: 0 20px;
    margin: 0 auto;
    height: 600px;
  }
  @media screen and (min-width: 768px) {
    max-width: 336px;
    margin: 0;
    padding: 0 0 0 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 384px;
    margin: 0 auto;
    padding: 60px 216px 0 840px;
  }
`;

export const SignupWrapper = styled.div`
  @media screen and (max-width: 767px) {
    background-image: url(${mobBackground});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center top 27px;
  }

  @media screen and (min-width: 768px) {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: -107px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      background-image: url(${tabBackground});
      background-repeat: no-repeat;
      background-size: auto;
      z-index: -1;
    }
  }

  @media screen and (min-width: 1440px) {
    &::before {
      top: -126px;
      background-image: url(${descBackground});
      background-position: center;
    }
  }
`;
