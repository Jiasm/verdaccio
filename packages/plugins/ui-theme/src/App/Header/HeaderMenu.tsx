import AccountCircle from '@mui/icons-material/AccountCircle';
import React, { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from 'verdaccio-ui/components/IconButton';
import Menu from 'verdaccio-ui/components/Menu';
import MenuItem from 'verdaccio-ui/components/MenuItem';

import HeaderGreetings from './HeaderGreetings';

interface Props {
  username: string;
  isMenuOpen: boolean;
  anchorEl?: Element | ((element: Element) => Element) | null | undefined;
  onLogout: () => void;
  onLoggedInMenu: (event: MouseEvent<HTMLButtonElement>) => void;
  onLoggedInMenuClose: () => void;
}

const HeaderMenu: React.FC<Props> = ({
  onLogout,
  username,
  isMenuOpen = false,
  anchorEl,
  onLoggedInMenu,
  onLoggedInMenuClose,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <IconButton
        color="inherit"
        data-testid="logInDialogIcon"
        id="header--button-account"
        onClick={onLoggedInMenu}
        size="large">
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={onLoggedInMenuClose}
        open={isMenuOpen}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <MenuItem>
          <HeaderGreetings username={username} />
        </MenuItem>
        <MenuItem
          button={true}
          data-testid="logOutDialogIcon"
          id="logOutDialogIcon"
          onClick={onLogout}>
          {t('button.logout')}
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;
