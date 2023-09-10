import React, { useEffect, useState } from 'react';
import { PRICE_RANGE } from '../../../constants/priceRange';

export default function PriceSelect({ name, setValue: updatePriceRange }) {
  const [selected, setSelected] = useState(PRICE_RANGE[0]);

  useEffect(() => {
    updatePriceRange(name, selected.value);
  }, [selected, updatePriceRange]);

  return (
    <div className='relative inline-block w-full rounded-lg border border-neutral-300'>
      <select
        name={name}
        value={selected.label}
        onChange={(e) =>
          setSelected(PRICE_RANGE.find((option) => option.label === e.target.value))
        }
        className='w-full h-10 pl-3 pr-7'
      >
        {PRICE_RANGE.map((option, index) => (
          <option key={index} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
