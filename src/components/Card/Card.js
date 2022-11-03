import React from 'react';
import { CardBox } from './Card.styles';

const Card = ({ image, title, description }) => {
  return (
    <CardBox>
      <div>
        <div>
          <img src={image} alt='Brand Recognition' />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </CardBox>
  );
};

export default Card;
