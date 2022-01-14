import styled from 'styled-components';

export default styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => (props.dark ? 'var(--blue-dark)' : 'var(--white)')};
  color:  ${(props) => (props.dark ? 'var(--white)' : 'var(--blue-dark)')};;
  border: 0;
  transition: 0.2s linear;
  flex-shrink: 0;
  font-size: 0;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  > svg {
    width: 16px;
  }

  &:hover {
   filter: brightness(0.9);
  } 
`;
