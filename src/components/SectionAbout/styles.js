import styled from 'styled-components';

export const Container = styled.div`
  min-height: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  padding: 5%;

  @media(max-width: 769px) {
    display: block;
    padding: 8%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding: 0 20px;

  :hover > a > img {
    width: 45px;
  }

  p {
    font-size: 15px;
  }

  @media(max-width: 769px) {
    padding: 5% 0;
  }
`;

export const Subtitle = styled.h3`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: var(--black);
  opacity: 0.9;
  margin-bottom: 20px;
`;