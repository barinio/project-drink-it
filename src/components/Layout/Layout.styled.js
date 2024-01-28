import styled from 'styled-components';
import imgMobile from '../../img/bg_main_mobile.svg';
import imgTablet from '../../img/bg_main_tablet.svg';
import imgDesktop from '../../img/bg_main_desktop_group.svg';

export const Main = styled.main`
  /* padding-left: 20px; */
  /* padding-right: 20px; */
  /* padding-bottom: 40px; */
  background-image: url(${imgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100vh;

  @media screen and (min-width: 320px) {
    /* background-image: url(${imgMobile}); */
  }
  @media screen and (min-width: 768px) {
    /* padding-top: 40px; */

    background-image: url(${imgTablet});
  }
  @media screen and (min-width: 1440px) {
    /* padding-top: 31px; */
    /* padding-bottom: 294px; */

    background-image: url(${imgDesktop});
  }
`;
