import styled from 'styled-components';

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
