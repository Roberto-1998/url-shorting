import React from 'react';
import {
  AdvancedBox,
  AdvancedContent,
  CardsContainer,
  Card,
  LineBox,
} from './Advanced..styles';
import brand from '../../../public/images/icon-brand-recognition.svg';

import records from '../../../public/images/icon-detailed-records.svg';

import customizable from '../../../public/images/icon-fully-customizable.svg';

const Advanced = () => {
  return (
    <AdvancedBox>
      <AdvancedContent>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <CardsContainer>
          <LineBox></LineBox>
          <Card>
            <div>
              <div>
                <img src={brand} alt='Brand Recognition' />
              </div>
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </Card>
          <Card>
            <div>
              <div>
                <img src={records} alt='Detailed Records' />
              </div>

              <h4>Detailed Records</h4>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </Card>

          <Card>
            <div>
              <div>
                <img src={customizable} alt='Fully Customizable' />
              </div>

              <h4>Fully Customizable</h4>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </Card>
        </CardsContainer>
      </AdvancedContent>
    </AdvancedBox>
  );
};

export default Advanced;
