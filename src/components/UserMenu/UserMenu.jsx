import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectAuthAuthenticated } from 'redux/auth/auth.selectors';

import {
  NavLinkSignin,
  UserSvg,
  Avatar,
  ArrowDownSvg,
  SettingSvg,
} from './UserMenu.styled';
import icons from '../../img/icons.svg';
import avatar from '../../img/avatar.png';

import { menuStyle } from './menu-style';

const UserMenu = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const UserName = 'David';

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {authenticated ? (
        <NavLinkSignin to="signin">
          {UserName}
          <Avatar src={avatar} alt={UserName} width="28" height="28" />

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
            onClose={handleClose}
            onClick={handleClose}
            sx={menuStyle}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <SettingSvg width="16" height="16">
                <use href={icons + '#icon-cog-tooth'}></use>
              </SettingSvg>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <SettingSvg width="16" height="16">
                <use href={icons + '#icon-log-out'}></use>
              </SettingSvg>
              Log out
            </MenuItem>
          </Menu>
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
