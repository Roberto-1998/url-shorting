import styled from 'styled-components';

export const LinkContainerBox = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: 650px) {
    width: 80%;
  }

  @media (min-width: 1000px) {
    width: 70%;
  }

  @media (min-width: 1500px) {
    width: 60%;
  }
`;
