import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { Button } from '@mui/material';

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

export const Avatar = styled.img`
  margin-left: 8px;
`;

export const ArrowDownSvg = styled.svg`
  fill: var(--primery-color-black);
  stroke: none;
  margin-left: 4px;

  &:is(:hover, :focus) {
    fill: var(--primery-color-blue);
  }
`;
export const SettingSvg = styled.svg`
  fill: none;
  stroke: var(--primery-color-blue);
`;
