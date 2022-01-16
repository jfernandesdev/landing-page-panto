import React from 'react';

import SectionTitle from '../SectionTitle';
import MenuCategory from '../MenuCategory';
import ProductCard from '../ProductCard';
import ButtonMoreInfo from '../ButtonMoreInfo';

import {Container, Slider} from './styles';

import {listProducts} from '../../utils/listProducts';

function SectionProducts() {
  return (
    <Container>
      <SectionTitle>Produtos mais vendidos</SectionTitle>
      <MenuCategory />

      <Slider>
        {listProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Slider>

      <ButtonMoreInfo toRedirect='#' viewAll />
    </Container>
  );
}

export default SectionProducts;
