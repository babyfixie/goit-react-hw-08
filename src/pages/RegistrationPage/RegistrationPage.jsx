import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { register } from "../../redux/auth/operations";
import style from "./RegistrationPage.module.css";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(register(values))
        .unwrap()
        .then(() => {
          navigate("/contacts");
        })
        .catch(() => {
          console.log("Registration error");
        });
    },
  });

  return (
    <div>
      <h1>Registration</h1>
      <form
        className={style.form}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <label className={style.label}>
          Username
          <input
            type="text"
            name="name"
            className={style.input}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <label className={style.label}>
          Email
          <input
            type="email"
            name="email"
            className={style.input}
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
        <button className={style.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
