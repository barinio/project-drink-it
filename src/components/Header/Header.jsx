import { useSelector } from 'react-redux';
import {
  HeaderSection,
  HeaderContainer,
  NavLinkLogo,
  NavLinkSignin,
  PrivatNav,
  UserSvg,
} from './Header.styled';
import { selectAuthAuthenticated } from 'redux/auth/auth.selectors';
import UserMenu from 'components/UserMenu/UserMenu';

import icons from '../../img/icons.svg';

export const Header = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <nav>
            {authenticated ? (
              <PrivatNav>
                <NavLinkLogo to="home">
                  <svg width="40" height="48">
                    <use href={icons + '#icon-logo'}></use>
                  </svg>
                  Tracker of water
                </NavLinkLogo>
                <UserMenu />
              </PrivatNav>
            ) : (
              <>
                <NavLinkLogo to="/">
                  <svg width="40" height="48">
                    <use href={icons + '#icon-logo'}></use>
                  </svg>
                  <span>Tracker of water</span>
                </NavLinkLogo>
                <NavLinkSignin to="signin">
                  Sign in
                  <UserSvg width="28" height="28">
                    <use href={icons + '#icon-user'}></use>
                  </UserSvg>
                </NavLinkSignin>
              </>
            )}
          </nav>
        </HeaderContainer>
      </HeaderSection>
    </>
  );
};
