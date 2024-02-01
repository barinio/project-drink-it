import styled from 'styled-components';

export const TodayWrapper = styled.div`
  margin-bottom: 24px;
`;

export const TodayItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  border-bottom: 1px solid var(--btn-color-light-blue);
`;

export const TodayInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const TodayTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: var(--primery-color-black);
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const Forget = styled.p`
  color: var(--secondary-color-blue);
`;

export const TodayList = styled.ul`
  height: 212px;
  overflow: auto;
`;

export const TodayVolume = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--primery-color-blue);
  margin-right: 16px;
`;

export const TodayTime = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 2;
  color: var(--primery-color-black);
`;

export const IconGlass = styled.svg`
  width: 26px;
  height: 26px;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const TodayTools = styled.div`
  display: flex;
  gap: 18px;
`;

export const ButtonChange = styled.button`
  background-color: transparent;
  padding: 0;
  width: 20px;
  height: 20px;

  & svg {
    stroke: var(--secondary-color-blue);
    fill: transparent;
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-bottom: 1px solid var(--secondary-color-blue);
  }
`;

export const ButtonDelete = styled.button`
  background-color: transparent;
  padding: 0;
  width: 20px;
  height: 20px;

  & svg {
    stroke: var(--btn-color-red);
    fill: transparent;
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-bottom: 1px solid var(--btn-color-red);
  }
`;

export const AddWaterBtn = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  color: var(--primery-color-blue);
  border: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  stroke: var(--primery-color-blue);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }

  & svg {
    width: 24px;
    height: 24px;
    fill: transparent;
  }

  &:hover {
    color: var(--secondary-yellow);
    stroke: var(--secondary-yellow);
  }
`;

export const Loader = styled.div`
  color: rgba(64, 123, 255, 1);
  font-size: 8px;
  padding: 20px;
  margin: 5px auto;
  position: absolute;
  top: 30%;
  left: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  transform: translate(50%, 50%);
  text-indent: -9999em;
  -webkit-animation: load4 1.3s infinite linear;
  animation: load4 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  @-webkit-keyframes load4 {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
        -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em,
        -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em,
        -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em,
        -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em,
        -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0,
        -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
        -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
        -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }
  @keyframes load4 {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
        -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em,
        -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em,
        -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em,
        -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em,
        -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0,
        -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
        -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em,
        -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }
`;
export const LoaderWrapper = styled.div`
  height: 212px;
  position: relative;
`;
