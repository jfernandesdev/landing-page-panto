import React from 'react';

import Navbar from '../../components/Navbar';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Navbar />
      <h1>Eu sou o header</h1>
    </Container>
  );
}

export default Header;