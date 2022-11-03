import styled from 'styled-components';

export const CustomButton = styled.button`
  color: white;
  background-color: hsl(180, 66%, 49%);
  border: none;
  font-weight: ${(props) => (props.size === 'full' ? '700' : 'none')};

  padding: ${(props) => (props.padding ? props.padding : '6px 17px')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '13px'};
  cursor: pointer;

  font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};

  &:hover {
    opacity: 0.6;
  }
  width: ${(props) => props.width && props.width};
`;
