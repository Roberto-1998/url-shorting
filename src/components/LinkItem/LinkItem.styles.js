import styled from 'styled-components';

export const LinkItemBox = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  overflow: hidden;

  hr {
    flex-basis: 100%;
    height: 2px;
    border: none;
    background-color: #f0f1f6;
  }

  div:first-child > p {
    font-weight: 700;
    font-size: 14px;
  }

  div:last-child > p {
    font-size: 14px;
  }

  div {
    flex-basis: 100%;
  }

  @media (min-width: 650px) {
    justify-content: space-between;
    align-items: center;
    hr {
      display: none;
    }
    gap: 0px;
    div:first-child {
      flex-basis: 20%;
    }

    div:last-child {
      flex-basis: 60%;
    }
  }
`;

export const ShortLink = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
  p,
  button {
    flex-basis: 100%;
  }

  a {
    font-size: 14px;
    color: hsl(180, 66%, 49%);
    cursor: pointer;
    text-decoration: none;
  }

  @media (min-width: 650px) {
    align-items: center;
    justify-content: end;
    p {
      flex-basis: 30%;
    }
    button {
      flex-basis: 30%;
    }
  }
`;
