import styled from 'styled-components';

export const Container = styled.div`
  height: 40vh;
  width: 100%;
  background: var(--gray-50);
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-gap: 10%;
  padding: 0 10%;
`;

export const Logo = styled.img`
  filter: invert(90%);
  margin-bottom: 20px;
  width: 70px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 8px 0;
  display: flex;
  align-items: center;
`;

export const SubtitleFooter = styled.h6`
  font-size: 17px;
  line-height: 22px;
  color: var(--orange-100);
  margin: 10px;
`;

export const LinkFooter = styled.a`
  font-weight: normal;
  font-size: 15px;
  line-height: 160%;
  color: var(--black);
  opacity: 0.8;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s;
  margin-left: 10px;
  
  > svg {
    width: 20px;
    margin-right: 5px;
  }

  :hover {
    font-weight: 500;
    color: var(--orange-50);
  }
`;

export const Credits = styled.div`
  background: var(--gray-50);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
`;

export const Copy = styled.span`
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.204545px;
  opacity: 0.5;
`;

