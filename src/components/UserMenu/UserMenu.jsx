import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth/auth.selectors';

import { NavLinkSignin, UserSvg, ArrowDownSvg } from './UserMenu.styled';
import icons from '../../img/icons.svg';
import avatar from '../../img/avatar.png';

const UserMenu = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  const UserName = 'David';

  return (
    <>
      {authenticated ? (
        <NavLinkSignin to="signin">
          {UserName}
          <img src={avatar} alt={UserName} width="28" height="28" />
          <ArrowDownSvg width="16" height="16">
            <use href={icons + '#icon-arrow-down'}></use>
          </ArrowDownSvg>
        </NavLinkSignin>
      ) : (
        <NavLinkSignin to="signin">
          <span>Sign in</span>
          <UserSvg width="28" height="28">
            <use href={icons + '#icon-user'}></use>
          </UserSvg>
        </NavLinkSignin>
      )}
    </>
  );
};

export default UserMenu;
