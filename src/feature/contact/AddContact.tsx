import React from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from './contactSlice';
import { useAppDispatch } from './../../app/hooks';

interface AddContactFormData {
  name: string;
}
const AddContact: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const submitHandler = (data: AddContactFormData) => {
    console.log(data);
    dispatch(addContact({ id: nanoid(), ...data }));
  };
  const { register, handleSubmit } = useForm<AddContactFormData>({
    defaultValues: {
      name: '',
    },
  });

  return (
    <div className="add-contact">
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

export default AddContact;
