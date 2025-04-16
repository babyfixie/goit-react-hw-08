import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { fetchContacts } from "../../redux/contacts/operations";

import {
  selectIsRefreshing,
  selectIsLoggedIn,
} from "../../redux/auth/selectors";
import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import style from "./App.module.css";

import HomePage from "../../pages/HomePage/HomePage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage";

import { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <div className={style.container}>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={<RestrictedRoute component={<RegistrationPage />} />}
          />
          <Route
            path="login"
            element={isLoggedIn ? <Navigate to="/contacts" /> : <LoginPage />}
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/contacts" : "/login"} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
