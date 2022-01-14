import React from 'react';

import Navbar from '../Navbar';
import InputSearch from '../InputSearch';

import { 
  Container, 
  Content,
  Title,
  Subtitle 
} from './styles';

function Header() {
  return (
    <Container>
      <Navbar />

      <Content>
          <Title>Torne o seu interior mais <br />minimalista &amp; moderno</Title>
          <Subtitle>Transforme sua casa ou escritório com Panto em muito mais <br />minimalista e moderna com facilidade e rapidez</Subtitle>
          <InputSearch /> 
      </Content>
    </Container>
  );
}

export default Header;