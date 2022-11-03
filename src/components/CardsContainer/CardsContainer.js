import React from 'react';
import { cards } from '../../constants/cards';
import Card from '../Card/Card';
import { CardsContainerBox, LineBox } from './CardsContainer.styles';

const CardsContainer = () => {
  return (
    <CardsContainerBox>
      <LineBox></LineBox>

      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </CardsContainerBox>
  );
};

export default CardsContainer;
