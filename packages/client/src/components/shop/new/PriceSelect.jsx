import React, { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { PRICE_RANGE } from '../../../constants/priceRange';
import FormErrorMessage from './FormErrorMessage';

export default function PriceSelect() {
  const { errors } = useFormContext();
  const { field } = useController({ 
    name: 'priceRange',
    rules: {
      required: '필수입력 정보입니다.',
    }
  });
  const [value, setValue] = useState('');

  const handleChange = (selectedPrice, isChecked) => {
    if (isChecked) {
      field.onChange(selectedPrice);
      setValue(selectedPrice);
    }
  };

  return (
    <>
      <div className='flex flex-wrap -mt-[15px]'>
        {PRICE_RANGE.map((price, index) => (
          <label
            key={index}
            className={`px-6 mr-[15px] mt-[15px] rounded-[10px] text-center text-18 h-12 leading-[48px] cursor-pointer
            ${value === price.value 
            ? 'bg-main border border-main text-white' 
            : 'border border-neutral-950 text-black'
          }`}
          >
            {price.label}
            <input
              onChange={(e) => handleChange(price.value, e.target.checked)}
              type='checkbox'
              checked={value.includes(price.value)}
              value={price.value}
            />
          </label>
        ))}
      </div>
      <FormErrorMessage name={'priceRange'} errors={errors} />
    </>    
  );
}