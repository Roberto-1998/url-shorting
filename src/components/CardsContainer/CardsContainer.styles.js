import styled from 'styled-components';

export const CardsContainerBox = styled.div`
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

export const LineBox = styled.div`
  position: absolute;

  transform: translateY(50%) rotate(90deg);
  background-color: hsl(180, 66%, 49%);
  height: 8px;
  width: 90%;
  z-index: 1;

  @media (min-width: 650px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: block;
    width: 50%;
    transform: translateY(0%) rotate(0deg);
  }
`;
