import React from 'react';
import Button from '../../components/shared/Button/Button';
import { BoostBox } from './Boost.styles';
const Boost = () => {
  return (
    <BoostBox>
      <h1>Boost your links today</h1>
      <Button
        width={'200px'}
        padding={'13px 10px'}
        borderRadius={'18px'}
        fontSize={'14px'}
      >
        {' '}
        Get Started
      </Button>
    </BoostBox>
  );
};

export default Boost;
