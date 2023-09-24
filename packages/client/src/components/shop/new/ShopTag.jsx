import React, { useState } from 'react';
import { useController } from 'react-hook-form';

const tags = ['가성비', '점심회식', '저녁회식', '혼밥', '단체'];

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
      {tags.map((tag) => (
        <label
          key={tag}
          className={`p-3 mr-2 rounded-md min-w-[80px] text-center 
          ${
        value.includes(tag)
          ? 'bg-black text-white'
          : 'border border-neutral-950 text-black'
        }`}
        >
          {tag}
          <input
            onChange={(e) => handleChange(tag, e.target.checked)}
            type='checkbox'
            checked={value.includes(tag)}
            value={tag}
          />
        </label>
      ))}
    </div>
  );
}
