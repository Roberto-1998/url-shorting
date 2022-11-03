import React, { useState } from 'react';
import Button from '../shared/Button/Button';
import { LinkItemBox, ShortLink } from './LinkItem.styles';

const LinkItem = ({ link }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(link.full_short_link);
    setCopy(true);
  };

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
        <Button
          borderRadius={'3px'}
          padding={'10px 30px'}
          onClick={(e) => handleCopy(e)}
          isCopied={copy}
        >
          {copy ? 'Copied!' : 'Copy'}
        </Button>
      </ShortLink>
    </LinkItemBox>
  );
};

export default LinkItem;
