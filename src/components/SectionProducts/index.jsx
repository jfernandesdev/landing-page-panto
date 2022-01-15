import React from 'react';

import SectionTitle from '../SectionTitle';
import MenuCategory from '../MenuCategory';
import ButtonMoreInfo from '../ButtonMoreInfo';

import { Container } from './styles';

function SectionProducts() {
  return (
    <Container>
      <SectionTitle>Produtos mais vendidos</SectionTitle>
      <MenuCategory />
     
      <ButtonMoreInfo toRedirect='#' viewAll/>
    </Container>
  );
}

export default SectionProducts;
