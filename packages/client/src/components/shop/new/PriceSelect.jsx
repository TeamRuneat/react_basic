import React, { useEffect, useState } from 'react';

const PRICE_RANGE = [
  { label: '1만원 이하', value: 'UNDER_ONE_THOUSANDS' },
  { label: '1만원대', value: 'ONE_THOUSANDS' },
  { label: '2만원대', value: 'TWO_THOUSANDS' },
  { label: '3만원대', value: 'THREE_THOUSANDS' },
  { label: '3만원 이상', value: 'OVER_THREE_THOUSANDS' },
];

export default function PriceSelect({ name, setValue }) {
  const [selected, setSelected] = useState(PRICE_RANGE[0]);

  useEffect(() => {
    setValue(name, selected.value);
  }, [selected, setValue]);

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
        {PRICE_RANGE?.map((option, index) => (
          <option key={index} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
