import React from 'react';
import social from '../../../../public/icons/social.svg';

export default function SocialSVG({ id, width, height }) {
  return(
    <svg role='img' width={width} height={height}>
      <use href={`${social}#${id}`} />
    </svg>
  );
}