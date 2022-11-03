import React from 'react';
import { useLinks } from '../../context/LinkContext';
import LinkItem from '../LinkItem/LinkItem';
import { LinkContainerBox } from './LinkContainer.styles';

const LinksContainer = () => {
  const { links } = useLinks();

  console.log(links);

  return (
    <LinkContainerBox>
      {links.map((link, index) => (
        <LinkItem key={`${link.originalLink + index}`} link={link} />
      ))}
    </LinkContainerBox>
  );
};

export default LinksContainer;
