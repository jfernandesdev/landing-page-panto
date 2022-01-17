import styled from 'styled-components';

export const Wrapper = styled.div`
  /* background: ${props =>
    props.black ? `rgb(62, 70, 76)` : `transparent`}; */
  background: transparent;
  position: absolute;
  width: 100%;
  top: 0;
  color: var(--white);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 3;
  transition: all ease 0.4s;

  @media (max-width: 769px) {
    padding: 8%;
    position: fixed;
    background: ${props =>
      props.black ? `rgb(62, 70, 76)` : `transparent`};
  }
`;

export const Logo = styled.img`
  z-index: 2;
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


export const NavContainer = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(49, 56, 62);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    visibility: hidden;
    width: 0;
   
    &.openMenu {
      width: 100%;
      visibility: revert;
    }

    > ul {
      flex-direction: column;
      text-align: center;

      li {
        font-size: 22px;
        padding: 25px;
      }
    }
  }
`;


export const WrapperBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarToggler = styled.button`
  @media(max-width: 769px) {
    display: flex;
  }

  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2em;
  height: 1.5em;
  position: relative;
  margin-left: 20px;
  border: 0;
  background: transparent;
  cursor: pointer;

  > span {
    display: inline-block;
    width: 100%;
    height: 8%;
    background: var(--white);
    transition: all 0.5s ease;
    transform-origin: left;

    &:nth-of-type(1),
    &:nth-of-type(5) {
      opacity: 0;
    }

    &:nth-of-type(2) {
      position: absolute;
      top: 0;
      right: 0;
      width: 70%;
    }

    &:nth-of-type(3) {
      transition-delay: 0.1s;
    }

    &:nth-of-type(4) {
      transition-delay: 0.2s;
      position: absolute;
      bottom: 0;
    }
  }

  &.activated {
    span {
      width: 0;
      &:nth-of-type(1) {
        width: 100%;
        animation: hamburger4animTop 0.8s ease;
        animation-fill-mode: forwards;
        animation-delay: 0.4s;
      }
      &:nth-of-type(5) {
        width: 100%;
        animation: hamburger4animBottom 0.8s ease;
        animation-fill-mode: forwards;
        animation-delay: 0.4s;
      }
    }
  }
`;
