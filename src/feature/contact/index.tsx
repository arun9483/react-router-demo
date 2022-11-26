import React from 'react';

import { useAppSelector } from '../../app/hooks';

import AddContact from './AddContact';
import ContactList from './ContactList';
import { contactSelectors } from './selector';

const ContactHomePage: React.FC<{}> = () => {
  const contactIds = useAppSelector((state) =>
    contactSelectors.selectIds(state)
  );
  return (
    <div className="contact-home-page">
      <h1>Contact Page</h1>
      <AddContact />
      <ContactList ids={contactIds as string[]} />
    </div>
  );
};

export default ContactHomePage;
