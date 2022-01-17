import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  font-weight: normal;
  font-size: 14px;
  line-height: 185%;
  color: var(--orange-100);
  margin-top: 20px;

  display: flex;
  align-items: center;

  img {
    margin-left: 5px;
    width: 35px;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;

    @media (max-width: 769px) {
      width: 40px;
    }
  }

  @media (max-width: 769px) {
    font-size: 16px;
  }
`;
