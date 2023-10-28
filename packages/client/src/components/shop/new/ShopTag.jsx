import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import FormErrorMessage from './FormErrorMessage';

const tags = ['가성비', '점심회식', '저녁회식', '혼밥', '단체', '빨리나오는', '양많은', '구워주는', '룸있는'];

export default function ShopTag({ control, name, errors, validation }) {
  const { field } = useController({ 
    control, 
    name,
    rules: validation.text
  });
  const [value, setValue] = useState([]);

  const handleChange = (selectedValue, isChecked) => {
    const updatedValue = isChecked
      ? [...value, selectedValue]
      : value.filter((val) => val !== selectedValue);
    field.onChange(updatedValue);
    setValue(updatedValue);
  };

  return (
    <>
      <div className='flex flex-wrap -mt-[15px]'>
        {tags.map((tag) => (
          <label
            key={tag}
            className={`px-6 mr-[15px] mt-[15px] rounded-[10px] text-center text-18 h-12 leading-[48px] cursor-pointer
            ${value.includes(tag) 
            ? 'bg-main border border-main text-white' 
            : 'border border-neutral-950 text-black'
          }`}
          >
            #{tag}
            <input
              onChange={(e) => handleChange(tag, e.target.checked)}
              type='checkbox'
              checked={value.includes(tag)}
              value={tag}
            />
          </label>
        ))}
      </div>
      <FormErrorMessage name={'tags'} errors={errors} />
    </>    
  );
}