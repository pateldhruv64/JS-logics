import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="enter id" {...register('id')} />
        <input type="text" placeholder="enter name" {...register('name')} />
        <input type="text" placeholder="enter email" {...register('email')} />
        <input
          type="number"
          placeholder="enter con"
          {...register('con', {
            required: true,
            maxLength: { value: 10, message: 'enter the number ' },
            minLength: { value: 10, message: 'enter the number ' },
          })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
