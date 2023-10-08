import React from 'react';
import SvgIcon from './SvgIcon';
import social from '../../../../public/icons/social.svg';

export default function SocialSVG({ id, width, height }) {
  return <SvgIcon id={id} type={social} width={width} height={height} />;
}