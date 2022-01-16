import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--white);
  padding: 5%;
`;

export const WrapperCarousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;

  > div {
    width: 90%;
    padding: 0 20px;
  }
`;
