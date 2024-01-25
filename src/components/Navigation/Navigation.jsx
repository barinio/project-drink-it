import { useSelector } from 'react-redux';
import { NavLinkStyled, PrivatNav } from './Navigation.styled';
import { selectAuthAuthenticated } from 'redux/auth/auth.selectors';
import UserMenu from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <>
      <header>
        <div className="container">
          <nav>
            {authenticated ? (
              <PrivatNav>
                <NavLinkStyled to="home">Logo_Tracker of water</NavLinkStyled>
                <UserMenu />
              </PrivatNav>
            ) : (
              <>
                <NavLinkStyled to="/">Logo_Tracker of water</NavLinkStyled>
                <NavLinkStyled to="signin">Sign in</NavLinkStyled>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};
