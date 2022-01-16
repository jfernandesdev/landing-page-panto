import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10;
  align-items: center;
  justify-content: center;
  padding: 10% 0;
`;

export const Content = styled.div`
  padding: 10% 15% 10% 20%;
`;

export const GridImages = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 50px 30px;
  position: relative;
  right: -10%;

  > :nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  > :nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 6;
  }

  > :nth-child(3) {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 6;
   
    :before {
      content: '';
      position: absolute;
      width: 495px;
      height: 301px;
      background: var(--gray-100);
      border-radius: 20px;
      right: -25%;
      top: -15%;
      z-index: -1;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background: ${props =>
    props.image && `url(${props.image}) no-repeat 25% center`};
  background-size: cover;
  border-radius: 20px;
  position: relative;

  :after {
    content: '';
    position: absolute;
    width: 80%;
    height: 70%;
    background: ${props =>
      props.image && `url(${props.image}) no-repeat center center`};
    border-radius: 20px;
    opacity: 0.5;
    filter: blur(30px);
    bottom: -20px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
  }
`;
