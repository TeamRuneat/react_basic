import React from 'react';
import icons from '../../../../public/icons/icons.svg';

export default function CommonSVG({ id, width, height }) {
  return(
    <svg role='img' width={width} height={height}>
      <use href={`${icons}#${id}`} />
    </svg>
  );
}