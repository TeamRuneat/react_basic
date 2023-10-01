import React from 'react';

export default function ToggleButton({ toggled, onToggle, onIcon, offIcon, className }) {
  return(
    <button onClick={() => onToggle(!toggled)} className={className}>
      {toggled ? onIcon : offIcon}
    </button>
  );
}