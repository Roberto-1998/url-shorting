import styled from 'styled-components';

export const CustomButton = styled.button`
  color: white;
  background-color: hsl(180, 66%, 49%);
  border: none;

  padding: ${(props) => (props.size === 'full' ? '15px' : '6px 17px')};
  border-radius: ${(props) => (props.size === 'full' ? '20px' : '13px')};
  cursor: pointer;
  font-size: 12px;
  &:hover {
    opacity: 0.6;
  }
  width: ${(props) => (props.size === 'full' ? '80%' : '')};
`;
