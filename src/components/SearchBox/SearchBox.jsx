import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import style from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={style.searchBox}>
      Find contacts by name
      <input
        className={style.searchInput}
        type="text"
        placeholder="Search contacts"
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default SearchBox;
