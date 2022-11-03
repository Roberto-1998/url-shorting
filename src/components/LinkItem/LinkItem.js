import React from 'react';
import Button from '../shared/Button/Button';
import { LinkItemBox, ShortLink } from './LinkItem.styles';

const LinkItem = ({ link }) => {
  return (
    <LinkItemBox>
      <div>
        <p>{link.originalLink}</p>

        <hr />
      </div>

      <ShortLink>
        <a
          href={link.full_short_link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {link.full_short_link}
        </a>
        <Button borderRadius={'3px'} padding={'10px 30px'}>
          Copy
        </Button>
      </ShortLink>
    </LinkItemBox>
  );
};

export default LinkItem;
