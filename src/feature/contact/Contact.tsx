import React from 'react';
import { useAppSelector } from './../../app/hooks';
import './Contact.css';

interface IContact {
  id: string;
}

const Contact: React.FC<IContact> = ({ id }) => {
  const contact = useAppSelector((state) => state.contacts.entities[id]);
  const editClickHandler = () => {
    console.log('edit clicked');
  };

  return (
    <div className="contact-details">
      <div>{contact?.name}</div>
      <div className="edit-icon">
        <span onClick={editClickHandler}>edit</span>
      </div>
    </div>
  );
};

export default Contact;
