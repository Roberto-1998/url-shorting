import styled from 'styled-components';
import backMovil from '../../../public/images/bg-shorten-mobile.svg';
import backDesktop from '../../../public/images/bg-shorten-desktop.svg';

export const ShortenBox = styled.div`
  position: absolute;
  top: -90px;
  right: 0;
  left: 0;
  width: 90%;
  background-color: #3a3053;
  border-radius: 10px;
  margin: 0 auto;

  padding: 30px;

  background-image: url(${backMovil});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 650px) {
    background-image: url(${backDesktop});
    top: -50px;
    width: 80%;
    gap: 0px;
  }

  @media (min-width: 1000px) {
    width: 70%;
  }

  @media (min-width: 1500px) {
    width: 60%;
  }
`;
