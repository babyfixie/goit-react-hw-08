import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { login } from "../../redux/auth/operations";
import style from "./LoginPage.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(login(values))
        .unwrap()
        .then(() => {
          console.log("login success");
        })
        .catch(() => {
          console.log("login error");
        });
    },
  });

  return (
    <div>
      <h1>Login</h1>
      <form
        className={style.form}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <label className={style.label}>
          Email
          <input
            className={style.input}
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <label className={style.label}>
          Password
          <input
            type="password"
            name="password"
            className={style.input}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <button type="submit" className={style.button}>
          Log In
        </button>
      </form>
    </div>
  );
}
