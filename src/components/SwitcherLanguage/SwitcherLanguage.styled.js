import styled from 'styled-components';

export const SwitcherWrapper = styled.div`
  ul {
    li {
      display: flex;
      flex-direction: column;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }
`;
export const FlagBtn = styled.button`
  background-color: transparent;
  border: none;
  height: 26px;
`;
export const FlagSvg = styled.svg`
  stroke: none;
  border: none;
`;
