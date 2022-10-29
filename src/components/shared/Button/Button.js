import React from 'react';
import { CustomButton } from './Button.styles';

const Button = ({ children, size }) => {
  return <CustomButton size={size}>{children}</CustomButton>;
};

export default Button;
