import styled from 'styled-components';

import backgroundHeader from '../../assets/images/background-header.jpg';

export const Container = styled.div`
  background: ${`url(${backgroundHeader}) no-repeat center center`};

  background-size: cover;
  height: 105vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(18%)
`;

export const Title = styled.h1`
  font-size: 43px;
  line-height: 130%;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 160%;
  margin: 10px 0;
`;