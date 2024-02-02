import styled from 'styled-components';

export const SwitcherWrapp = styled.label`
  display: block;
  position: relative;

  width: 40px;
  height: 24px;
  .switcher {
    height: 0;
    width: 0;
    opacity: 0;
  }
  .switcher-slider {
    position: absolute;
    left: 0;
    bottom: 8.33%;
    top: 8.33%;
    right: 0;

    border-radius: 30px;
    background-color: #407bff;
    cursor: pointer;
  }
  .switcher-slider::before {
    content: '';
    position: absolute;
    top: 2px;
    right: 52.5%;
    bottom: 12.5%;
    left: 4%;

    height: 16px;
    width: 16px;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1),
      1px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    cursor: pointer;
  }
  .switcher:checked + .switcher-slider::before {
    transform: translateX(21px);
  }
`;
