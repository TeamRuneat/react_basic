import React from 'react';
import classNames from 'classnames';

export default function Button({text, variant, onClick}) {
  const BUTTON_CLASS = classNames(
    'px-4 py-2 w-28 rounded',
    {
      'bg-stone-950 border-stone-950 border text-white': variant === 'default',
      'border-slate-700 border': variant === 'border',
    }
  );

  return (
    <button className={BUTTON_CLASS} onClick={onClick}>
      {text}
    </button>
  );
}
