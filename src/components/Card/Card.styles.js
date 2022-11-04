import styled from 'styled-components';

export const CardBox = styled.div`
  background-color: white;
  z-index: 2;
  max-width: 330px;
  height: 220px;

  p {
    font-size: 14px;
    color: hsl(0, 0%, 75%);
    line-height: 1.5;
    text-align: center;
    font-weight: normal;
  }

  :nth-child(2) {
    margin-top: 60px;
  }
  padding-bottom: 30px;
  margin-top: 40px;

  @media (min-width: 650px) {
    max-width: 300px;
    height: 220px;
    p {
      text-align: left;
    }

    &,
    :nth-child(2) {
      margin-top: 50px;
    }
  }

  @media (min-width: 960px) {
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
