import React from 'react';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri';

export default function Checkbox({ id, isChecked, onChange }) {
  const CHECK_CLASS = 'w-7 h-7';

  return (
    <label className='cursor-pointer'>
      {isChecked ? (
        <RiCheckboxCircleFill className={CHECK_CLASS} />
      ) : (
        <RiCheckboxBlankCircleLine className={CHECK_CLASS} />
      )}
       <input
          type='checkbox'
          id={id}
          checked={isChecked}
          onChange={onChange}
        />
    </label>
  );
}
