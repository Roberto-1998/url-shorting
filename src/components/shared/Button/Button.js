import React from 'react';
import { CustomButton } from './Button.styles';

const Button = ({ children, size, width, padding, fontSize, borderRadius }) => {
  return (
    <CustomButton
      width={width}
      size={size}
      padding={padding}
      fontSize={fontSize}
      borderRadius={borderRadius}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
