import { Link, NavLink, useLocation } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
import sprite from '../../assets/icons.svg';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/modal/slice.js';
import {
  selectModalState,
  selectModalType,
} from '../../redux/modal/selectors.js';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const isOpen = useSelector(selectModalState);
  const type = useSelector(selectModalType);

  const isNanniesOrFavouritesPage =
    location.pathname === '/nannies' || location.pathname === '/favourites';

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  const handleLoginClick = () => {
    dispatch(openModal('login'));
  };

  const handleRegisterClick = () => {
    dispatch(openModal('register'));
  };

  return (
    <div
      className={clsx(s.header, isNanniesOrFavouritesPage && s.alternateHeader)}
    >
      <Link to="/" className={s.logo}>
        <svg className={s.iconArrow} width={164} height={28}>
          <use href={`${sprite}#icon-NannyServices`}></use>
        </svg>
      </Link>
      <div className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/nannies">
          Nannies
        </NavLink>
        {isNanniesOrFavouritesPage && (
          <NavLink className={buildLinkClass} to="/favourites">
            Favourites
          </NavLink>
        )}
      </div>
      <div className={s.actions}>
        <button
          type="button"
          className={s.actionLogin}
          onClick={handleLoginClick}
        >
          Log In
        </button>
        <button
          type="button"
          className={s.actionRegister}
          onClick={handleRegisterClick}
        >
          Registration
        </button>
      </div>
      {isOpen && (
        <>
          {type === 'login' && <LoginForm />}
          {type === 'register' && <RegistrationForm />}
        </>
      )}
    </div>
  );
};

export default Header;
