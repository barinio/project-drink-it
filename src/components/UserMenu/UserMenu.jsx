import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { selectAuthAuthenticated, selectAuthUserData } from 'redux/auth/auth.selectors';

import {
  UserContainer,
  NavLinkSignin,
  UserSvg,
  Avatar,
  ArrowDownSvg,
  SettingSvg,
} from './UserMenu.styled';

import icons from '../../img/icons.svg';
import avatar from '../../img/avatar.png';

import { menuStyle } from './menu-style';

import Setting from 'components/Setting/Setting';
import { LogOut } from 'components/LogOut/LogOut';
import { logoutThunk } from 'redux/auth/thunk';

const UserMenu = () => {
  const dispatch = useDispatch();

  const authenticated = useSelector(selectAuthAuthenticated);

  const user = useSelector(selectAuthUserData);
  // console.log('user:', user);
  const UserName = user.userName;
  const avatarURL = user.avatarURL || avatar;

  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const [isSureLogOut, setIsSureLogOut] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => setAnchorEl(event.currentTarget);

  const onLogout = () => {
    dispatch(logoutThunk());
    setIsSureLogOut(false);
  };

  const handleClose = e => {
    setAnchorEl(null);

    if (e.target.classList.contains('setting')) setIsOpenSetting(true);
    if (e.target.classList.contains('logout')) setIsSureLogOut(true);
  };

  const onClose = () => setIsSureLogOut(false);
  const closeModal = () => setIsOpenSetting(false);

  useEffect(() => {
    document.body.style.overflow = isOpenSetting || isSureLogOut ? 'hidden' : '';
  }, [isOpenSetting, isSureLogOut]);

  const onBackdrop = e => e.target === e.currentTarget && closeModal();

  return (
    <>
      {authenticated ? (
        <>
          <UserContainer to="signin">
            {UserName}
            <Avatar src={avatarURL} alt={UserName} width="28" height="28" />

            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                padding: '0',
                minWidth: '16px',
              }}
            >
              <ArrowDownSvg width="16" height="16">
                <use href={icons + '#icon-arrow-down'}></use>
              </ArrowDownSvg>
            </Button>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClick={handleClose}
              sx={menuStyle}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem className="setting" onClick={handleClose}>
                <SettingSvg width="16" height="16">
                  <use href={icons + '#icon-cog-tooth'}></use>
                </SettingSvg>
                Settings
              </MenuItem>
              <MenuItem className="logout" onClick={handleClose}>
                <SettingSvg width="16" height="16">
                  <use href={icons + '#icon-log-out'}></use>
                </SettingSvg>
                Log out
              </MenuItem>
            </Menu>
          </UserContainer>
          {isOpenSetting && <Setting closeModal={closeModal} onBackdrop={onBackdrop} />}
          {isSureLogOut && <LogOut onClose={onClose} onLogout={onLogout} />}
        </>
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
