import React, { useEffect, useState } from 'react';
import { FOOD_TYPE } from '../../../constants/foodType';

export default function FoodSelect({ name, setValue: updateFoodType }) {
  const [selected, setSelected] = useState(FOOD_TYPE[0]);

  useEffect(() => {
    updateFoodType(name, selected.value);
  }, [selected, updateFoodType]);

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
        {FOOD_TYPE.map((option, index) => (
          <option key={index} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
