import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.header}>
      {/* <Link to="/" className={s.logo}></Link>
      <div className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/nannies">
          Nannies
        </NavLink>
        <NavLink className={buildLinkClass} to="/features">
          Features
        </NavLink>
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div> */}
    </div>
  );
};

export default Header;
