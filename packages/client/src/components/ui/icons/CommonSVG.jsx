import React from 'react';
import SvgIcon from './SvgIcon';
import icons from '../../../../public/icons/icons.svg';

export default function CommonSVG({ id, width, height }) {
  return <SvgIcon id={id} type={icons} width={width} height={height} />;
}