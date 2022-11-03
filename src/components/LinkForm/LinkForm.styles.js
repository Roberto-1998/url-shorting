import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  div {
    flex-basis: 100%;
    input {
      width: 100%;
      padding: 10px;

      border-radius: 5px;
      border-color: ${(props) => props.error && 'red'};

      ::placeholder {
        color: ${(props) => props.error && 'red'};
        border: none;
      }

      :focus {
        outline: none;
      }
    }

    p {
      color: red;
      font-size: 12px;
      margin-top: 3px;
    }
  }

  button {
    flex-basis: 100%;
  }

  @media (min-width: 650px) {
    gap: 0px;
    justify-content: space-between;
    div {
      flex-basis: 67%;
    }

    button {
      flex-basis: 30%;
    }
  }
`;
