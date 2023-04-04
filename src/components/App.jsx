import { useState, useEffect } from 'react';
import { ContactForm } from './СontactForm/ContactForm';
import { ContactList } from './СontactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  Section,
  ContactsWrap,
  SectionTitle,
  SectionSubTitle,
} from './App.styled';

import { loadContacts, saveContacts } from '../utils/LocalStorageFunctions';

export function App() {
  // початковий стан списку контактів
  const [contacts, setContacts] = useState([]);
  // початковий стан фільтру для пошуку контактів
  const [filter, setFilter] = useState('');

  // завантажуємо  контактів з локального сховища  та оновлюємо стан компонента
  useEffect(() => {
    const storedContacts = loadContacts('contacts') || [];
    setContacts(storedContacts);
  }, []);

  // зберігаємо новий список контактів в локальному сховищі,якщо контакти були оновлені
  useEffect(() => {
    if (contacts.length !== loadContacts('contacts').length) {
      saveContacts('contacts', contacts);
    }
  }, [contacts]);

  // отримуємо новий контакт і додаємо його до списку контактів
  const addContact = contact => {
    setContacts([...contacts, contact]);
  };

  //встановлюємо значення фільтру  залежно від того, що користувач ввів у текстове поле.
  // отримуємо об'єкт події від текстового поля та встановлюємо нове значення
  const handleChange = e => {
    setFilter(e.target.value);
  };
  //фільтруємо список контактів залежно від значення фільтра
  const filterContacts = () => {
    const normalFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  };

  // створення нового списку контактів без контакту який треба видалити
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <Section>
      <SectionTitle>Phonebook</SectionTitle>
      <ContactForm onSubmitData={addContact} contacts={contacts} />
      <ContactsWrap>
        <SectionSubTitle>Contacts</SectionSubTitle>
        <Filter onHandleChange={handleChange} filter={filter} />
        <ContactList
          contacts={filterContacts()}
          deleteContacts={deleteContact}
        />
      </ContactsWrap>
    </Section>
  );
}
