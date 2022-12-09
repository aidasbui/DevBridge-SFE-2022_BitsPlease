import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routeConfig';
import classNames from 'classnames/bind';
import Logo_SA from '../../assets/logos/Logo_SA.svg';
import Icon_arrow_down from '../../assets/icons/Icon_arrow_down.svg';
import Icon_arrow_up from '../../assets/icons/Icon_arrow_up.svg';
import NavLink from './NavLink';
import NavDropdown from './NavDropdown';
import styles from './Header.module';

const cn = classNames.bind(styles);

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();
  const academiesRef = useRef();

  useEffect(() => {
    const handleCloseDropdown = (event) => {
      if (
        !dropdownRef?.current?.contains(event.target) &&
        !academiesRef?.current?.contains(event.target)
      )
        setIsOpen(false);
    };

    document.addEventListener('mousedown', handleCloseDropdown);
    document.addEventListener('keyup', handleCloseDropdown);

    return () => {
      document.removeEventListener('mousedown', handleCloseDropdown);
      document.removeEventListener('keyup', handleCloseDropdown);
    };
  }, []);

  return (
    <header className={cn('header')}>
      <Link className={cn('header__logo-wrapper')} to={routes.home}>
        <Logo_SA className={cn('logo-icon')} alt="Sourcery Academy logo" />
        <h1 className={cn('logo-name')}>Sourcery Academy</h1>
      </Link>
      <div className={cn('nav-wrapper')}>
        <nav className={cn('nav')}>
          <ul className={cn('nav__list')}>
            <NavLink to={'#'}>About us</NavLink>

            <li
              className={cn('nav__list-item', 'nav__list-item--have-dropdown')}
            >
              <button
                className={cn('nav__link')}
                onClick={() => setIsOpen((prevState) => !prevState)}
                ref={academiesRef}
              >
                Academies
                {isOpen ? (
                  <Icon_arrow_up className={cn('dropdown-icon')} />
                ) : (
                  <Icon_arrow_down className={cn('dropdown-icon')} />
                )}
              </button>
              {isOpen && (
                <NavDropdown ref={dropdownRef} setIsOpen={setIsOpen} />
              )}
            </li>

            <NavLink to={'#'}>Media</NavLink>
            <NavLink to={'/register'}>Register</NavLink>
            <NavLink to={'#'}>Questions</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
