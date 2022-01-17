import styled from 'styled-components';

export default styled.h2`
  font-weight: bold;
  font-size: 35px;
  line-height: 45px;
  color: var(--black);
  margin-bottom: 20px;

  @media(max-width: 769px) {
    font-size: 29px;
    line-height: 39px;
  }
`;