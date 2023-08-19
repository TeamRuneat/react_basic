import React, { useEffect, useState } from 'react';

const FOOD_TYPE = [
  { label: '한식', value: 'KOREAN' },
  { label: '일식', value: 'JAPANESE' },
  { label: '중식', value: 'CHINESE' },
  { label: '양식', value: 'WESTERN' },
  { label: '분식', value: 'SNACK' },
  { label: '아시안', value: 'ASIAN' },
];

export default function FoodSelect({ name, setValue }) {
  const [selected, setSelected] = useState(FOOD_TYPE[0]);

  useEffect(() => {
    setValue(name, selected.value);
  }, [selected, setValue]);

  return (
    <div className='relative inline-block w-full rounded-lg border border-neutral-300'>
      <select
        name={name}
        value={selected.label}
        onChange={(e) =>
          setSelected(FOOD_TYPE.find((option) => option.label === e.target.value))
        }
        className='w-full h-10 pl-3 pr-7'
      >
        {FOOD_TYPE?.map((option, index) => (
          <option key={index} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
