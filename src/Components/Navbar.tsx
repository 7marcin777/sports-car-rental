import React, { FC, useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import SignOutButton from './SignOutButton';

interface Props { }


const Navbar: FC<Props> = (_: Props) => {
  const authenticationState = useSelector((state: RootState) => state.authentication);
  const userState = useSelector((state: RootState) => state.user);

  const [click, setClick] = useState<Boolean>(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          FASTERCAR
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/cars'
              className='nav-links'
              onClick={closeMobileMenu}

            >
              Samochody
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/ask'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Pytania
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Kontakt
            </Link>
          </li>
          {!authenticationState.isAuthenticated && (
            <>
              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  SIGN UP
                </Link>
              </li>
              <li>
                <Link
                  to='/sign-in'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  SIGN IN
                </Link>
              </li>
            </>
          )}
        </ul>
        {!authenticationState.isAuthenticated && (<Button />)}
        {authenticationState.isAuthenticated && (
          <>
            <p style={{ color: '#FFFFFF', textAlign: 'center', fontSize: '.9rem' }}>Witaj {userState.name}!</p>
            <SignOutButton />
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;