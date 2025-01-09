import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
import sprite from '../../assets/icons.svg';

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.header}>
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
        {/* <NavLink className={buildLinkClass} to="/features">
          Features
        </NavLink> */}
      </div>
      <div className={s.actions}>
        <Link to="/login" className={s.actionLogin}>
          Log In
        </Link>
        <Link to="/register" className={s.actionRegister}>
          Registration
        </Link>
      </div>
    </div>
  );
};

export default Header;
