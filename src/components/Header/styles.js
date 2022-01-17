import styled from 'styled-components';

import backgroundHeader from '../../assets/images/background-header.jpg';

export const Container = styled.div`
  background: ${`url(${backgroundHeader}) no-repeat bottom center`};
  background-size: cover;
  height: 110vh;
  width: 100%;
  display: flex;
  justify-content: center;

  @media(max-width: 769px) {
    background-size: cover;
    background-position: 16%;
  }
`;

export const Content = styled.div`
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(15%);

  @media (max-width: 769px) {
    text-align: left;
    align-items: flex-start;
    padding: 8%;
  }
`;

export const Title = styled.h1`
  font-size: 43px;
  line-height: 130%;

  @media (max-width: 769px) {
    font-size: 30px;

    > br {
      display: none;
    }
  }
`;

export const Subtitle = styled.h4`
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
  margin: 10px 0;

  @media (max-width: 769px) {
    font-size: 15px;

    > br {
      display: none;
    }
  }
`;