import React, { createContext, useContext, useState } from 'react';

const LinkContext = createContext({});

const LinkProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  const addLinks = (link) => {
    setLinks([...links, link]);
  };

  return (
    <LinkContext.Provider value={{ links, addLinks }}>
      {children}
    </LinkContext.Provider>
  );
};

export const useLinks = () => {
  const { links, addLinks } = useContext(LinkContext);

  return {
    links,
    addLinks,
  };
};

export default LinkProvider;
