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
          <NavLink dropdown>Furniture</NavLink>
          <DropDownMenu>
            <DropDownItem href="chair">Chair</DropDownItem>
            <DropDownItem href="beds">Beds</DropDownItem>
            <DropDownItem href="sofa">Sofa</DropDownItem>
            <DropDownItem href="lamp">Lamp</DropDownItem>
          </DropDownMenu>
        </NavItem>

        <NavItem>
          <NavLink href="#">Shop</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">About Us</NavLink>
        </NavItem>

        <NavItem>
           <NavLink href="#">Contact</NavLink>
        </NavItem>  
      </Nav>

      <Cart amount={3}>
        <ShoppingBag />
      </Cart>
    </Wrapper>
  );
}

export default Navbar;