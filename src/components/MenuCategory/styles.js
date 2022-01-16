import styled from 'styled-components';

export const CategoryMenu = styled.ul`
  background: var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  white-space: nowrap;
  height: 57px;
  width: auto;
  margin: 10px 0 15px;
  border-radius: 44px;
  padding: 5px;
`;

export const CategoryItem = styled.li`
  background: ${props => (props.active ? `var(--white)` : `transparent`)};
  border-radius: 32px;
  height: 45px;
  padding: 7px 20px;
  margin: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--black);
  opacity: 0.8;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    background: var(--white);
  }
`;

