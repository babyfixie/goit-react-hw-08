import React from "react";
import { useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { selectLoading, selectError } from "../redux/contacts/selectors";

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
