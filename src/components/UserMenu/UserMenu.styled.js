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

export const NotAvatar = styled.span`
  color: var(--primery-color-white);
  font-size: 25px;
  font-weight: 700;
  margin-left: 8px;
  text-shadow: var(--secondary-yellow) 0px 0px 10px;
  border: 1px dashed darkblue;
  border-radius: 50%;
  width: 35px;
  text-align: center;
  background-image: linear-gradient(55grad, var(--primery-color-blue), var(--secondary-color-blue));
`;
export const UserContainer = styled.div`
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
  border-radius: 50%;
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
