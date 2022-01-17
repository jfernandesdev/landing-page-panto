import React, { useState, useEffect } from 'react';

import LogoPanto from '../../assets/images/logo-panto.svg';
import { ShoppingBag } from '../../styles/Icons';

import { 
  Wrapper,
  Logo,
  WrapperBtn,
  NavbarToggler, 
  NavContainer,
  Nav, 
  NavItem,
  NavLink,  
  DropDownMenu, 
  DropDownItem, 
  Cart 
} from './styles';

function Navbar() {
  const [blackHeader, setBlackHeader] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 15) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <Wrapper black={blackHeader}>
      <Logo src={LogoPanto} alt="Panto" />
    
      <NavContainer className={menuIsOpen && "openMenu"}>
        <Nav>
          <NavItem>
            <NavLink href="#" dropdown>Mobília</NavLink>
            <DropDownMenu>
              <DropDownItem href="chair">Cadeira</DropDownItem>
              <DropDownItem href="beds">Cama</DropDownItem>
              <DropDownItem href="sofa">Sofá</DropDownItem>
              <DropDownItem href="lamp">Lâmpada</DropDownItem>
            </DropDownMenu>
          </NavItem>

          <NavItem>
            <NavLink href="#">Comprar</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">Sobre nós</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">Contato</NavLink>
          </NavItem>  
        </Nav>
      </NavContainer>

      <WrapperBtn>
        <Cart amount={3} title='Ver minha sacola'>
          <ShoppingBag />
        </Cart>

        <NavbarToggler 
          className={menuIsOpen && "activated"}
          onClick={toggleMenu}
        >
           {Array.from({length: 5}).map((_, index) => (
            <span key={index}></span>
           ))}
        </NavbarToggler>
      </WrapperBtn>
    </Wrapper>
  );
}

export default Navbar;