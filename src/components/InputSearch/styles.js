import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  background: rgba(255, 255, 255, 0.15);
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 42px;
  margin-top: 15px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    position: absolute;
    right: 5px;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background: transparent;
  color: var(--white);
  border: 0;
  outline: 0;
  padding: 20px 15px;

  ::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;