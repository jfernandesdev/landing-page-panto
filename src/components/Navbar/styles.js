import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  position: absolute;
  width: 100%;
  top: 0;
  color: var(--white);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
`;

export const Cart = styled.button`
  width: 34px;
  height: 34px;
  background: transparent;
  color: var(--white);
  border: 0;
  position: relative;
  cursor: pointer;

  > svg {
    width: 100%;
  }

  :before {
    content: ${props => (props.amount ? `'${props.amount}'` : `'0'`)};
    position: absolute;
    width: 18px;
    height: 18px;
    right: -5px;
    background: var(--orange-100);
    border-radius: 50%;
    font-family: 'Gilroy-Medium', sans-serif;
    font-size: 11px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
`;

export const Nav = styled.ul`
  display: flex;
  list-style-type: none;

  ul {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding: 0 30px;

  :hover > ul, :focus > ul, :visited > ul, :active > ul {
    display: flex;
  }
`;

export const NavLink = styled.a`
  color: var(--white);
  text-decoration: none;
  position: relative;
  transition: before width 0.4s;
  cursor: pointer;

  :after {
    content: ${props => props.dropdown && `''`};
    margin-left: ${props => props.dropdown && '10px'};
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #FFF;
  }

  :before {
    content: '';
    position: absolute;
    bottom: -4px;
    width: 0;
    height: 1px;
    background: #fff;
    left: 50%;
    display: block;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  :hover:before {
    width: 100%;
    left: 0;
  }
`;

export const DropDownMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  margin-top: 5px;
  background: rgba(255, 255, 255, 0.20);
  backdrop-filter: blur(8px);
  border-radius: 5px;
  transition: linear 0.3s ease 0s;
  z-index: 2;
`;

export const DropDownItem = styled.a`
  color: var(--white);
  text-decoration: none;
  padding: 10px;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;
