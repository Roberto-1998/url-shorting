import React from 'react';
import { CustomButton } from './Button.styles';

const Button = ({
  children,
  size,
  width,
  padding,
  fontSize,
  borderRadius,
  onClick,
  isCopied,
}) => {
  return (
    <CustomButton
      width={width}
      size={size}
      padding={padding}
      fontSize={fontSize}
      borderRadius={borderRadius}
      onClick={onClick}
      isCopied={isCopied}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
