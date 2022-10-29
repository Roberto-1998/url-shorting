import styled from 'styled-components';

export const NavbarBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 0 20px;

  @media (min-width: 700px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: none;

  @media (min-width: 700px) {
    display: flex;
  }

  li {
    font-size: 12px;
    color: hsl(257, 7%, 63%);
    font-weight: 700;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  display: none;

  @media (min-width: 700px) {
    display: flex;
  }

  & > button:first-child {
    background-color: transparent;
    border: none;
    color: hsl(257, 7%, 63%);
    font-weight: 700;
    &:hover {
      color: black;
    }
  }
`;

export const ToogleButton = styled.button`
  background-color: transparent;
  border: none;
  color: hsl(257, 7%, 63%);
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const MenuListSm = styled.ul`
  padding: 40px 30px;
  background-color: hsl(257, 27%, 26%);
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 20px;

  @media (min-width: 700px) {
    display: none;
  }

  hr {
    width: 100%;
    height: 0.5px;
    background-color: hsl(257, 7%, 63%);
    border: none;
  }

  li {
    cursor: pointer;
  }
`;
