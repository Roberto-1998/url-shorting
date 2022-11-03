import React from 'react';

import { AdvancedBox, AdvancedContent } from './Advanced.styles';

import LinksContainer from '../LinksContainer/LinksContainer';
import ShortenContainer from '../ShortenContainer/ShortenContainer';
import CardsContainer from '../CardsContainer/CardsContainer';

const Advanced = () => {
  return (
    <AdvancedBox>
      <ShortenContainer />

      <LinksContainer />

      <AdvancedContent>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </AdvancedContent>

      <CardsContainer />
    </AdvancedBox>
  );
};

export default Advanced;
