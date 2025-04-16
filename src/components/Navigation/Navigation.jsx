import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import style from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={style.nav}>
      <ul className={style.ulNav}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? style.activeLink : undefined
            }
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? style.activeLink : undefined
              }
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
