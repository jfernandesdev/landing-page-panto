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
  }

  :hover > img {
    width: 45px;
  }
`;
