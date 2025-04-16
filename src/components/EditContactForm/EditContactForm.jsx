import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { updateContact } from "../../redux/contacts/operations";
import style from "./EditContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  number: Yup.string()
    .matches(
      /^(\+?[0-9]{1,3})?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}$/,
      "Phone number is not valid"
    )
    .required("Phone number is required"),
});

const EditContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const updatedContact = { ...values, id: contact.id };
    dispatch(updateContact(updatedContact));
    toast.success("Contact was updated!");
    onClose();
  };

  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <div>
          <label className={style.label} htmlFor="name">
            Name
          </label>
          <Field className={style.input} type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label className={style.label} htmlFor="number">
            Phone Number
          </label>
          <Field
            className={style.input}
            type="text"
            id="number"
            name="number"
          />
          <ErrorMessage name="number" component="div" className="error" />
        </div>
        <button type="submit" className={style.button}>
          Update Contact
        </button>
      </Form>
    </Formik>
  );
};

export default EditContactForm;
