import React from 'react';
import Contact from './Contact';

interface IContactList {
  ids: string[];
}

const ContactList: React.FC<IContactList> = ({ ids }) => {
  return (
    <div className="contact-list">
      {ids.map((id) => {
        return <Contact key={id} id={id} />;
      })}
    </div>
  );
};

export default ContactList;
