import React from 'react';
import { useForm } from 'react-hook-form';

import { useAppSelector } from './../../app/hooks';

interface EditContactFormData {
  name: string;
}

interface IEditContact {
  id: string;
}
const EditContact: React.FC<IEditContact> = ({ id }) => {
  const contact = useAppSelector((state) => state.contacts.entities[id]);

  const submitHandler = (data: EditContactFormData) => {
    console.log(data);
  };
  const { register, handleSubmit } = useForm<EditContactFormData>({
    defaultValues: {
      name: contact?.name,
    },
  });

  return (
    <div className="edit-contact">
      <form name="" onSubmit={handleSubmit(submitHandler)}>
        <label>
          <span>Enter Name: </span>
          <input
            {...register('name', {
              required: 'name is required field',
            })}
          />
          <input type="submit" />
        </label>
      </form>
    </div>
  );
};

export default EditContact;
