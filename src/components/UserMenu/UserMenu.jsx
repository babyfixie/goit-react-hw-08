import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import style from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={style.greeting}>
      <p>Welcome, {name}</p>
      <button className={style.button} onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
