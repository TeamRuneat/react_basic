import React from 'react';
import logo from '../../../../public/icons/logo.svg';

export default function LogoSVG({ id, width, height }) {
  return(
    <svg role='img' width={width} height={height}>
      <use href={`${logo}#${id}`} />
    </svg>
  );
}