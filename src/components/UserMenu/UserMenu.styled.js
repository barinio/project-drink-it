import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkSignin = styled(NavLink)`
  display: flex;
  align-items: center;
  line-height: 1.25;
  span {
    margin-right: 8px;
  }
`;

export const UserSvg = styled.svg`
  fill: none;
  stroke: var(--primery-color-black);
`;

export const ArrowDownSvg = styled.svg`
  fill: var(--primery-color-black);
  stroke: none;
  margin-left: 4px;

  &:is(:hover, :focus) {
    fill: var(--primery-color-blue);
  }
`;
