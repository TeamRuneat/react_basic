import React, { useState } from 'react';
import { useController } from 'react-hook-form';

const tags = [
  { label: '#가성비', value: '가성비' },
  { label: '#점심회식', value: '점심회식' },
  { label: '#저녁회식', value: '저녁회식' },
  { label: '#혼밥', value: '혼밥' },
  { label: '#단체', value: '단체' },
];

export default function ShopTag({ control, name }) {
  const { field } = useController({ control, name });
  const [value, setValue] = useState([]);

  const handleChange = (selectedValue, isChecked) => {
    const updatedValue = isChecked
      ? [...value, selectedValue]
      : value.filter((val) => val !== selectedValue);
    field.onChange(updatedValue);
    setValue(updatedValue);
  };

  return (
    <div className='flex'>
      {tags.map((tag, index) => (
        <label
          key={index}
          className={`p-3 mr-2 rounded-md min-w-[80px] text-center 
          ${
            value.includes(tag.value)
              ? 'bg-black text-white'
              : 'border border-neutral-950 text-black'
          }`}
        >
          {tag.label}
          <input
            onChange={(e) => handleChange(tag.value, e.target.checked)}
            type='checkbox'
            checked={value.includes(tag.value)}
            value={tag.value}
          />
        </label>
      ))}
    </div>
  );
}
