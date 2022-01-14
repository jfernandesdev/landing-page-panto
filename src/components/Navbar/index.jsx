import React from 'react';

import LogoPanto from '../../assets/images/logo-panto.svg';
import { ShoppingBag } from '../../styles/Icons';

import { 
  Wrapper, 
  Nav, 
  NavItem,
  NavLink,  
  DropDownMenu, 
  DropDownItem, 
  Cart 
} from './styles';

function Navbar() {
  return (
    <Wrapper>
      <img src={LogoPanto} alt="Panto" />
     
      <Nav>
        <NavItem>
          <NavLink dropdown>Mobília</NavLink>
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

      <Cart amount={3} title='Ver minha sacola'>
        <ShoppingBag />
      </Cart>
    </Wrapper>
  );
}

export default Navbar;