import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

export default function FormErrorMessage({ name, errors }) {
  return (
    <ErrorMessage
      name={name}
      errors={errors} 
      render={({ message }) => (
        <p className='mt-[10px] text-[#ff0045] text-16'>{message}</p>
      )}
    />
  );
}