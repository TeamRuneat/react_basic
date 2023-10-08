import React from 'react';
import SvgIcon from './SvgIcon';
import logo from '../../../../public/icons/logo.svg';

export default function LogoSVG({ id, width, height }) {
  return <SvgIcon id={id} type={logo} width={width} height={height} />;
}