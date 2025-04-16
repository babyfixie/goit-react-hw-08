import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav>
      <ul className={style.ulNav}>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? style.activeLink : undefined
            }
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? style.activeLink : undefined
            }
          >
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
