const { useState } = require('react');

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return {
    toggle,
    handleToggle,
  };
};

export default useToggle;
