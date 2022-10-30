import React from 'react';
import Button from '../shared/Button/Button';
import image from '../../../public/images/illustration-working.svg';
import { BannerBox, TextBox, ImageBox } from './Banner.styles';

const Banner = () => {
  return (
    <BannerBox>
      <TextBox>
        <h1>More than just shorter links</h1>
        <p>
          {' '}
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button
          width={'200px'}
          padding={'13px 10px'}
          borderRadius={'18px'}
          fontSize={'14px'}
        >
          {' '}
          Get Started
        </Button>
      </TextBox>
      <ImageBox>
        <img src={image} alt='Shortly best links' />
      </ImageBox>
    </BannerBox>
  );
};

export default Banner;
