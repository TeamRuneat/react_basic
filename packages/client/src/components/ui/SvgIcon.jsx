import React from 'react';

export default function SvgIcon({ type, id, width, height }) {
  return (
    <svg role='img' width={width} height={height}>
      <use href={`${type}#${id}`} />
    </svg>
  );
}