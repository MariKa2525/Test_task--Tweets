import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={css.container}>
      <ul className={css.list}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="tweets">
          Tweets
        </NavLink>
      </ul>
    </nav>
  );
};
