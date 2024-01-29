import styled from 'styled-components';
import mobileImg from '../../img/1.svg';
import tabletImg from '../../img/2.svg';
import desktopImg from '../../img/3.svg';
export const SectionWrapper = styled.section`
  @media screen and (max-width: 767px) {
    position: fixed;
    height: 100%;
    overflow: hidden;
    width: 100%;
    background-image: url(${mobileImg});
    background-position: top;

    background-size: contain;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 530px) {
    background-size: cover;
  }
  @media screen and (min-width: 768px) {
    position: fixed;
    height: 100%;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      top: -107px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      background-image: url(${tabletImg});
      background-repeat: no-repeat;
      background-size: contain;
      z-index: -10;
    }
  }
  @media screen and (min-width: 1200px) {
    max-height: 100%;
    &::before {
      top: -272px;
      background-image: url(${desktopImg});
      background-position: center;
    }
  }
`;
