import styled from 'styled-components';

export const AdvancedBox = styled.section`
  width: 100%;
  background-color: #f0f1f6;
  padding: 100px 0 80px;
`;

export const AdvancedContent = styled.div`
  width: 90%;
  margin: 0 auto;

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
  display: none;
  position: absolute;

  transform: translateY(-50%);
  background-color: hsl(180, 66%, 49%);
  height: 8px;
  width: 50%;
  z-index: 1;

  @media (min-width: 1084px) {
    display: block;
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
