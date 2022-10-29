import React from 'react';
import Button from '../shared/Button/Button';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  MenuListSm,
  NavbarBox,
  MenuList,
  ContentBox,
  ButtonBox,
  ToogleButton,
} from './Navbar.styles';
import useToggle from '../../hooks/useToggle';

const Navbar = () => {
  const { toggle, handleToggle } = useToggle();

  return (
    <>
      <NavbarBox>
        <ContentBox>
          <h1>Shortly</h1>
          <MenuList>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </MenuList>
        </ContentBox>
        <ButtonBox>
          <button>Login</button>
          <Button>Sign Up</Button>
        </ButtonBox>
        <ToogleButton onClick={handleToggle}>
          <AiOutlineMenu />
        </ToogleButton>
      </NavbarBox>

      {toggle && (
        <MenuListSm>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <hr />
          <li>Login</li>
          <Button size={'full'}>Sign Up</Button>
        </MenuListSm>
      )}
    </>
  );
};

export default Navbar;
