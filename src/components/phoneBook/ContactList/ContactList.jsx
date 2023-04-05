import PropTypes from 'prop-types';

import { Contact } from './Contact';

import { ContactsList, ContactsItem, DeleteButton } from './ContactList.styled';

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <>
      <ContactsList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <Contact name={name} number={number} />
              <DeleteButton type="button" onClick={() => deleteContacts(id)}>
                Delete
              </DeleteButton>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};

export { ContactList };
