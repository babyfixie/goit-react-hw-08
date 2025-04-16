import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import EditContactForm from "../EditContactForm/EditContactForm";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const [editContact, setEditContact] = useState(null);

  if (!Array.isArray(filteredContacts)) {
    return <p>No contacts found</p>;
  }

  const handleEdit = (contactId) => {
    const contactToEdit = filteredContacts.find(
      (contact) => contact.id === contactId
    );
    setEditContact(contactToEdit);
  };

  const handleCloseEditForm = () => {
    setEditContact(null);
  };

  return (
    <div>
      {editContact && (
        <div>
          <h2>Edit Contact</h2>
          <EditContactForm
            contact={editContact}
            onClose={handleCloseEditForm}
          />
        </div>
      )}
      <ul className={styles.contactList}>
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => dispatch(deleteContact(contact.id))}
            onEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
