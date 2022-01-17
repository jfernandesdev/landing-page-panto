import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10;
  align-items: center;
  justify-content: center;
  padding: 10% 0 5%;

  @media(max-width: 769px) {
    display: block;
    padding-top: 90px;
  }
`;

export const WrapperImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  :before, :after {
    content: '';
    position: absolute;
    width: 495px;
    height: 301px;
    background: var(--gray-100);
    border-radius: 20px;
    z-index: -5;
  }

  :before {
    left: -10%;
    top: -15%;
  }

  :after {
    right: 5%;
    top: 18%;
  }

  @media (max-width: 769px) {
    :before, :after {
      width: 200px;
      height: 160px;
    }

    :before {
      left: -5%;
      top: -20%;
    }

    :after {
      right: 15%;
      top: 10%;
    }
  }
`;

export const ImageSection = styled.div`
  width: 600px;
  height: 445px;
  background: ${props =>
    props.image && `url(${props.image}) no-repeat center center`};
  margin-left: -25%;
  background-size: cover;
  border-radius: 20px;
  position: relative;

  :before {
    content: '';
    position: absolute;
    width: 80%;
    height: 70%;
    background: ${props =>
      props.image && `url(${props.image}) no-repeat bottom`};
    background-size: cover;
    filter: blur(20px);
    border-radius: 49px;
    opacity: 0.5;
    bottom: -8%;
    left: 5%;
    right: 0;
    margin: auto !important;
    z-index: -2;
  }

  @media (max-width: 769px) {
    width: 300px;
    height: 200px;
    margin-left: -35%;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  padding: 10% 20% 10% 10%;

  @media (max-width: 769px) {
    padding: 8%;
  }
`;
