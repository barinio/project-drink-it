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
