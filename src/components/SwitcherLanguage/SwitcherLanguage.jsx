import i18next from 'i18next';
import { LOCALS } from 'i18n/constants';

import { SwitcherWrapper, FlagBtn, FlagSvg } from './SwitcherLanguage.styled';

import { menuLanguageStyle } from './MuiSwitcherLanguage';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import flags from '../../img/flags.svg';

import { useState } from 'react';

const SwitcherLanguage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLanguageChange = language => {
    i18next.changeLanguage(language);
    handleClose();
  };

  return (
    <>
      <SwitcherWrapper className="swither-language">
        <Button onClick={handleMenuOpen}>
          <FlagSvg width="26" height="26">
            {i18next.language === LOCALS.UK && (
              <use href={flags + '#icon-ua'} />
            )}
            {i18next.language === LOCALS.EN && (
              <use href={flags + '#icon-en'} />
            )}
            {i18next.language === LOCALS.FR && (
              <use href={flags + '#icon-fr'} />
            )}
            {i18next.language === LOCALS.ES && (
              <use href={flags + '#icon-sp'} />
            )}
            {i18next.language === LOCALS.IT && (
              <use href={flags + '#icon-it'} />
            )}
            {i18next.language === LOCALS.DE && (
              <use href={flags + '#icon-de'} />
            )}
            {i18next.language === LOCALS.PT && (
              <use href={flags + '#icon-pt'} />
            )}
            {i18next.language === LOCALS.JA && (
              <use href={flags + '#icon-jp'} />
            )}
            {i18next.language === LOCALS.PL && (
              <use href={flags + '#icon-pl'} />
            )}
          </FlagSvg>
        </Button>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          sx={menuLanguageStyle}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem className="ua">
            <FlagBtn
              disabled={i18next.language === LOCALS.UK}
              onClick={() => handleLanguageChange(LOCALS.UK)}
            >
              <FlagSvg width="26" height="26">
                <use href={flags + '#icon-ua'}></use>
              </FlagSvg>
            </FlagBtn>
          </MenuItem>
          <MenuItem className="en">
            <FlagBtn
              disabled={i18next.language === LOCALS.EN}
              onClick={() => handleLanguageChange(LOCALS.EN)}
            >
              <FlagSvg width="26" height="26">
                <use href={flags + '#icon-en'}></use>
              </FlagSvg>
            </FlagBtn>
          </MenuItem>
          <MenuItem className="fr">
            <FlagBtn
              disabled={i18next.language === LOCALS.FR}
              onClick={() => handleLanguageChange(LOCALS.FR)}
            >
              <FlagSvg width="26" height="26">
                <use href={flags + '#icon-fr'}></use>
              </FlagSvg>
            </FlagBtn>
          </MenuItem>
          <MenuItem className="sp">
            <FlagBtn
              disabled={i18next.language === LOCALS.ES}
              onClick={() => handleLanguageChange(LOCALS.ES)}
            >
              <FlagSvg width="26" height="26">
                <use href={flags + '#icon-sp'}></use>
              </FlagSvg>
            </FlagBtn>
          </MenuItem>
          <MenuItem className="it">
            <FlagBtn
              disabled={i18next.language === LOCALS.IT}
              onClick={() => handleLanguageChange(LOCALS.IT)}
            >
              <FlagSvg width="26" height="26">
                <use href={flags + '#icon-it'}></use>
              </FlagSvg>
            </FlagBtn>
          </MenuItem>
          <MenuItem className="de">
            <FlagBtn
              disabled={i18next.language === LOCALS.DE}
              onClick={() => handleLanguageChange(LOCALS.DE)}
            >
              <FlagSvg width="26" height="26">
                <use href={flags + '#icon-de'}></use>
              </FlagSvg>
            </FlagBtn>
          </MenuItem>
          <MenuItem className="pt">
            <FlagBtn
              disabled={i18next.language === LOCALS.PT}
              onClick={() => handleLanguageChange(LOCALS.PT)}
            >
              <FlagSvg width="26" height="26">
                <use href={flags + '#icon-pt'}></use>
              </FlagSvg>
            </FlagBtn>
          </MenuItem>
          <MenuItem className="jp">
            <FlagBtn
              disabled={i18next.language === LOCALS.JA}
              onClick={() => handleLanguageChange(LOCALS.JA)}
            >
              <FlagSvg width="26" height="26">
                <use href={flags + '#icon-jp'}></use>
              </FlagSvg>
            </FlagBtn>
          </MenuItem>
          <MenuItem className="pl">
            <FlagBtn
              disabled={i18next.language === LOCALS.PL}
              onClick={() => handleLanguageChange(LOCALS.PL)}
            >
              <FlagSvg width="26" height="26">
                <use href={flags + '#icon-pl'}></use>
              </FlagSvg>
            </FlagBtn>
          </MenuItem>
        </Menu>
      </SwitcherWrapper>
    </>
  );
};

export default SwitcherLanguage;
