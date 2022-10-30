import styled from 'styled-components';
import backMovil from '../../../public/images/bg-boost-mobile.svg';
import backDesktop from '../../../public/images/bg-boost-desktop.svg';

export const BoostBox = styled.section`
  background-image: url(${backMovil});
  background-color: #4b3f6b;
  height: 30vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  color: white;
  justify-content: center;

  h1 {
    letter-spacing: 2px;
  }

  @media (min-width: 650px) {
    background-image: url(${backDesktop});
    background-color: #3a3053;
  }
`;
