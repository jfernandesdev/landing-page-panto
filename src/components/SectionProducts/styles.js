import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--gray-50);
  padding: 5%;
`;

export const WrapperCarousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0 10px;

  > div {
    width: 90%;
  }
`;
