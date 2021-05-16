import React from 'react';
import Form from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

import style from './PhoneBook.module.css';

const PhoneBook = () => {
  return (
    <>
      <div className={style.phonebook}>
        <h1 className={style.title}>Phonebook</h1>
        <Form />
        <h2 className={style.contactsTitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default PhoneBook;