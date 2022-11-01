import styled from 'styled-components';

export const BannerBox = styled.section`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  margin-top: 40px;
  padding-bottom: 200px;

  @media (min-width: 650px) {
    gap: 0;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 35px;
    text-align: center;
    line-height: 1.1;
    font-weight: 700;
    color: hsl(260, 8%, 14%);
  }

  p {
    color: hsl(257, 7%, 63%);
    font-size: 14px;
    text-align: center;
    line-height: 1.7;
    width: 85%;
  }

  @media (min-width: 650px) {
    padding-left: 5%;
    flex-basis: 50%;
    justify-content: center;
    align-items: flex-start;

    h1 {
      text-align: left;
    }

    p {
      text-align: left;
    }
  }

  @media (min-width: 1200px) {
    padding-left: 10%;
    flex-basis: 50%;
  }
`;

export const ImageBox = styled.div`
  width: 100%;

  img {
    object-fit: contain;
    width: 100%;
    object-position: 145px center;
  }

  @media (min-width: 650px) {
    flex-basis: 50%;

    img {
      object-position: 50px center;
    }
  }
`;
