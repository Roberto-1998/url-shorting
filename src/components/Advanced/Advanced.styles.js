import styled from 'styled-components';
import backMovil from '../../../public/images/bg-shorten-mobile.svg';
import backDesktop from '../../../public/images/bg-shorten-desktop.svg';

export const AdvancedBox = styled.section`
  width: 100%;
  position: relative;
  background-color: #f0f1f6;
  padding: 100px 0 80px;
`;

export const AdvancedContent = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;

  h1,
  p {
    text-align: center;
    margin-top: 20px;
  }

  h1 {
    color: hsl(257, 27%, 26%);
    font-size: 20px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
    color: hsl(257, 7%, 63%);
    line-height: 1.5;
  }

  @media (min-width: 650px) {
    h1 {
      font-size: 28px;
    }
    p {
      text-align: left;
    }
    & > p {
      width: 80%;
      margin: 20px auto;
      text-align: center;
    }
  }

  @media (min-width: 1000px) {
    & > p {
      width: 50%;
    }
  }
`;

export const LineBox = styled.div`
  position: absolute;

  transform: translateY(50%) rotate(90deg);
  background-color: hsl(180, 66%, 49%);
  height: 8px;
  width: 80%;
  z-index: 1;

  @media (min-width: 717px) {
    display: none;
  }

  @media (min-width: 1084px) {
    display: block;
    width: 50%;
    transform: translateY(0%) rotate(0deg);
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;

  @media (min-width: 650px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const Card = styled.div`
  background-color: white;
  z-index: 2;
  max-width: 330px;
  height: 220px;
  :nth-child(2) {
    margin-top: 60px;
  }
  padding-bottom: 30px;
  margin-top: 40px;

  @media (min-width: 650px) {
    max-width: 300px;
    height: 220px;

    &,
    :nth-child(2) {
      margin-top: 50px;
    }
  }

  @media (min-width: 1084px) {
    &,
    :nth-child(2) {
      margin-top: 0px;
    }

    :nth-child(3) {
      margin-top: 70px;
    }

    :nth-child(4) {
      margin-top: 140px;
    }
  }

  & > div {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    position: relative;
    padding-top: 50px;

    div {
      background-color: hsl(257, 27%, 26%);

      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      position: absolute;
      top: -25px;
      border-radius: 50%;

      img {
        object-fit: contain;
        width: 30px;
      }
    }
  }
`;

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
    width: 60%;
  }

  @media (min-width: 1500px) {
    width: 50%;
  }
`;
