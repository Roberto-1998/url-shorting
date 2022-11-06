import styled from 'styled-components';

export const ColorBox = styled.section`
  background-color: hsl(260, 8%, 14%);
  width: 100%;
  padding: 50px 0;
`;

export const FooterBox = styled.footer`
  font-size: 12px;

  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;

  gap: 15px;

  h1 {
    font-size: 20px;
  }

  div {
    flex-basis: 100%;

    ul {
      padding: 0;
    }

    ul li {
      color: hsl(257, 7%, 63%);
      cursor: pointer;
      line-height: 2.2;
      :hover {
        color: hsl(180, 66%, 49%);
      }
    }

    :last-child {
      display: flex;
      justify-content: center;
      gap: 15px;

      img {
        width: 18px;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 650px) {
    gap: 0;
    justify-content: space-between;
    align-items: flex-start;

    width: 90%;
    margin: 0 auto;
    text-align: start;
    padding-bottom: 100px;

    h1 {
      font-size: 28px;
      flex-basis: 20%;
    }

    div {
      flex-basis: 15%;
    }
  }
  @media (min-width: 1000px) {
    width: 80%;
  }
`;
