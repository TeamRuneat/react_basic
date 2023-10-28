import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { FOOD_TYPE } from '../../../constants/foodType';
import FormErrorMessage from './FormErrorMessage';

export default function FoodSelect({ name, control, errors, validation }) {
  const { field } = useController({ 
    control, 
    name,
    rules: validation.text
  });
  const [value, setValue] = useState('');

  const handleChange = (selectedFoodType, isChecked) => {
    if (isChecked) {
      field.onChange(selectedFoodType);
      setValue(selectedFoodType);
    }
  };

  return (
    <>
      <div className='flex flex-wrap'>
        {FOOD_TYPE.map((type, index) => (
          <label
            key={index}
            className={`px-6 mr-[15px] rounded-[10px] text-center text-18 h-12 leading-[48px] cursor-pointer
            ${value === type.value
            ? 'bg-main border border-main text-white' 
            : 'border border-neutral-950 text-black'
          }`}
          >
            {type.label}
            <input
              onChange={(e) => handleChange(type.value, e.target.checked)}
              type='checkbox'
              checked={value.includes(type.value)}
              value={type.value}
            />
          </label>
        ))}
      </div>
      <FormErrorMessage name={'type'} errors={errors} />
    </>   
  );
}